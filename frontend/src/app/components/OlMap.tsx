import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Circle, Fill, Stroke, Text, Icon } from "ol/style";
import Overlay from "ol/Overlay";

import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from "ol/interaction.js";

import Projection from "ol/proj/Projection.js";
import TileWMS from "ol/source/TileWMS.js";
import { FullScreen, Rotate, defaults as defaultControls } from "ol/control.js";
import { LineString } from "ol/geom";

import arrow from "../../../public/images/arrow.png"

interface IfPoint {
  pointId: number;
  name: string;
  E: number;
  N: number;
  H: number;
}

interface Deviations {
  pointId: number;
  name: string;
  dE: number;
  dN: number;
  dH: number;
}

const OlMap = ({ bbox, pts, nextPts, handle3DClick }: { bbox: [number, number]; pts: IfPoint[]; nextPts: IfPoint[]; handle3DClick: (pointId: string | null) => void }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [overlayContent, setOverlayContent] = useState("");
  const [selectedPointName, setSelectedPointName] = useState<string>("null");

  useEffect(() => {
    if (!mapRef.current || !overlayRef.current) return;

    const extent = [2420000, 130000, 2900000, 1350000];

    const swisstopolayer = new TileLayer({
      extent: extent,
      source: new TileWMS({
        url: "https://wms.geo.admin.ch/",
        crossOrigin: "anonymous",
        attributions:
          '© <a href="http://www.geo.admin.ch/internet/geoportal/' +
          'en/home.html">geo.admin.ch</a>',
        projection: "EPSG:2056",
        params: {
          LAYERS: "ch.swisstopo.landeskarte-farbe-10",
          FORMAT: "image/jpeg",
        },
        serverType: "mapserver",
      }),
    });

    const map = new Map({
      controls: defaultControls().extend([
        new FullScreen(),
        new Rotate({ duration: 1000 }),
      ]),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      target: mapRef.current,
      layers: [swisstopolayer],
      view: new View({
        center: bbox,
        zoom: 15,
        projection: new Projection({
          code: "EPSG:2056",
          units: "m",
        }),
      }),
    });

    // Convert points to features with individual circle style
    const features = pts.map((point) => {
      const geometry = new Point([point.E, point.N]);
      return new Feature({
        geometry: geometry,
        name: point.name,
        easting: point.E,
        northing: point.N,
        height: point.H,
        pointId: point.pointId, // Store the pointId in the feature
      });
    });

    features.forEach((feature, index) => {
      feature.setStyle(
        new Style({
          image: new Circle({
            radius: 5, // Radius of the circle representing the point
            fill: new Fill({ color: "red" }), // Fill color of the circle
            stroke: new Stroke({ color: "black", width: 1 }), // Stroke color and width of the circle
          }),
          text: new Text({
            text: pts[index].name.toString(), // Set the text to the point name
            offsetX: 15, // Offset the text horizontally from the point
            offsetY: -15, // Offset the text vertically from the point
            fill: new Fill({ color: "black" }), // Fill color of the text
            font: "bold 12px Arial", // Font style of the text
            backgroundFill: new Fill({ color: "white" }), // Background fill color of the text
          }),
        })
      );
    });

    // Create vector source and layer
    const vectorSource = new VectorSource({
      features: features,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      zIndex: 999, // Set a higher z-index to ensure the vector layer is rendered above the base layer
    });

    map.addLayer(vectorLayer);

    // Create displacement vectors
    const displacementFeatures = pts.map((point) => {
      const correspondingNextPoint = findCorrespondingNextPoint(point, nextPts);
      if (correspondingNextPoint) {
        const displacementVector = calculateDisplacement(point, correspondingNextPoint);
        if (displacementVector) {
          const displacementGeometry = new LineString([[point.E, point.N], [point.E + displacementVector.E, point.N + displacementVector.N]])

          return new Feature({
            geometry: displacementGeometry,
            name: point.name,
            dEasting: displacementVector.E,
            dNorthing: displacementVector.N,
            dHeight: displacementVector.H
          });
        };
      };
    });
    console.log(displacementFeatures)

    // displacementFeatures.forEach((displacementFeature, index) => {
    //   displacementFeature?.setStyle(
    //     new Style({
    //       image: new Icon({
    //         src: 'images/arrow.png',
    //         anchor: [0, 0],
    //         rotateWithView: true,
    //         rotation: Math.atan2(displacementFeature.get('dNorthing'), displacementFeature.get('dEasting'))
    //       })
    //     })
    //   );
    // });
    displacementFeatures.forEach((displacementFeature, index) => {
      displacementFeature?.setStyle(
        new Style({
          stroke: new Stroke({
            color: 'lightgreen', // Farbe der Linie
            width: 2, // Breite der Linie
          }),
        })
      );
    });
    

    const filteredDisplacementFeatures = displacementFeatures.filter(feature => feature !== undefined) as Feature<LineString>[];
    console.log("fil", filteredDisplacementFeatures)

    const vectorDisplacementSource = new VectorSource({
      features: filteredDisplacementFeatures
    });
    console.log(vectorDisplacementSource)

    const vectorDisplacementLayer = new VectorLayer({
      source: vectorDisplacementSource,
      zIndex: 999
    });

    map.addLayer(vectorDisplacementLayer);

    // Create overlay
    const overlay = new Overlay({
      element: overlayRef.current,
      positioning: "bottom-center",
      offset: [0, -10], // Offset from the bottom center of the map
    });

    map.addOverlay(overlay);

    map.on("click", function (e) {
      overlay.setPosition(undefined);
      map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
        let clickedName = feature.get("name");
        let clickedEasting = feature.get("easting");
        let clickedNorthing = feature.get("northing");
        let clickedHeight = feature.get("height");
        let clickedPointId = feature.get("pointId"); // Get the pointId from the feature

        setOverlayContent(
          `${clickedName}<br>Easting: ${clickedEasting}<br>Northing: ${clickedNorthing}<br>Height: ${clickedHeight} <br><br>`
        );

        setSelectedPointName(clickedName.toString()); // Set the selected pointId
        overlay.setPosition(e.coordinate); // Set overlay position to clicked coordinate
      });
    });

    return () => {
      map.dispose(); // Dispose the map when component unmounts
    };
  }, [bbox, pts, nextPts]); // Include bbox and points in the dependency array

  function findCorrespondingNextPoint(
    basePoint: IfPoint,
    nextPoints: IfPoint[]
  ): IfPoint | undefined {
    return nextPoints.find((point) => point.name === basePoint.name);
  }

  const displacementFactor = 1000

  function calculateDisplacement(
    basePoint: IfPoint,
    nextPoint: IfPoint
  ): IfPoint | undefined {
    return {
      pointId: nextPoint.pointId,
      name: nextPoint.name,
      E: (nextPoint.E - basePoint.E) * displacementFactor,
      N: (nextPoint.N - basePoint.N) * displacementFactor,
      H: (nextPoint.H - basePoint.H) * displacementFactor
    };
  }



  return (
    <main style={{ width: "100%", height: "100%" }} className="p-4">
      <div
        ref={mapRef}
        className="map"
        style={{ width: "100%", height: "100%", background: "#FFFFFF" }}
      />
      <div
        ref={overlayRef}
        className=" bg-slate-200 text-slate-900 rounded-xl text-sm p-3"
      >
        <div dangerouslySetInnerHTML={{ __html: overlayContent }}></div>
        {selectedPointName !== null && (
          <button
            className=" bg-cyan-700 text-cyan-50 px-4 py-2 rounded-2xl"
            onClick={() => handle3DClick(selectedPointName)}
          >
            3D-Modell laden
          </button>
        )}
      </div>
    </main>
  );
};

export default OlMap;
