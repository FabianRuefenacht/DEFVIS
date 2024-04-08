import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Circle, Fill, Stroke, Text } from 'ol/style';

import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from 'ol/interaction.js';

import Projection from 'ol/proj/Projection.js';
import TileWMS from 'ol/source/TileWMS.js';
import { FullScreen, Rotate, defaults as defaultControls } from 'ol/control.js';

interface IfPoint {
  pointId: number;
  name: string;
  E: number;
  N: number;
  H: number;
}
// ...

const OlMap = ({ bbox, pts }: { bbox: [number, number], pts: IfPoint[] }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const extent = [2420000, 130000, 2900000, 1350000];

    const swisstopolayer = new TileLayer({
      extent: extent,
      source: new TileWMS({
        url: 'https://wms.geo.admin.ch/',
        crossOrigin: 'anonymous',
        attributions: '© <a href="http://www.geo.admin.ch/internet/geoportal/' + 'en/home.html">geo.admin.ch</a>',
        projection: 'EPSG:2056',
        params: {
          'LAYERS': 'ch.swisstopo.landeskarte-farbe-10',
          'FORMAT': 'image/jpeg'
        },
        serverType: 'mapserver'
      })
    });

    const map = new Map({
      controls: defaultControls().extend([new FullScreen(), new Rotate({ duration: 1000 })]),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      target: mapRef.current,
      layers: [
        swisstopolayer
      ],
      view: new View({
        center: bbox,
        zoom: 15,
        projection: new Projection({
          code: 'EPSG:2056',
          units: 'm'
        })
      })
    });

    // Convert points to features with individual circle style
    const features = pts.map((point) => {
      const geometry = new Point(([point.E, point.N]));
      return new Feature(geometry);
    });

    features.forEach((feature, index) => {
      feature.setStyle(new Style({
        image: new Circle({
          radius: 5, // Radius of the circle representing the point
          fill: new Fill({ color: 'red' }), // Fill color of the circle
          stroke: new Stroke({ color: 'black', width: 1 }) // Stroke color and width of the circle
        }),
        text: new Text({
          text: pts[index].name.toString(), // Set the text to the point name
          offsetX: 15, // Offset the text horizontally from the point
          offsetY: -15, // Offset the text vertically from the point
          fill: new Fill({ color: 'black' }), // Fill color of the text
          font: 'bold 12px Arial', // Font style of the text
          backgroundFill: new Fill({ color: 'white' }), // Background fill color of the text
        })
      }));
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

    return () => {
      map.dispose(); // Dispose the map when component unmounts
    };
  }, [bbox, pts]); // Include bbox and points in the dependency array
  


  return <div ref={mapRef} className="map" style={{ width: '100%', height: '100%', background: '#FFFFFF' }} />;
};

export default OlMap;
