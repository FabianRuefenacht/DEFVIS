import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface Point {
  name: string;
  E: number;
  N: number;
  H: number;
}

interface ThreeSceneProps {
  width: number;
  height: number;
  basePts: Point[];
  nextPts: Point[];
  cameraposition: number[]
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ width, height, basePts, nextPts, cameraposition }) => {
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!threeContainerRef.current) return;

    // Szene, Kamera und Renderer erstellen
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#FFFFFF");
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const loader = new GLTFLoader();


    function findCorrespondingNextPoint(
      basePoint: Point,
      nextPoints: Point[]
    ): Point | undefined {
      return nextPoints.find((point) => point.name === basePoint.name);
    }

    loader.load(
      "models/SIP.gltf",
      function (gltf: any) {
        scene.add(gltf.scene);

        // Hier das Zentrum des geladenen Modells bestimmen
        const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
        const center = boundingBox.getCenter(new THREE.Vector3());

        // Setze die Kamera-Position und das OrbitControls-Ziel auf das Zentrum des Modells
        
        if (basePts) {
          // `basePts` ist definiert und ein Array
          if (Array.isArray(basePts)) {
            const largestH = basePts.reduce((prev, current) => (prev.H > current.H) ? prev : current);

            const centerE = cameraposition[0] !== 0 ? cameraposition[0] : center.x;
            const centerN = cameraposition[1] !== 0 ? Math.floor(center.y / 1000) * 1000 - 500 - cameraposition[1] : center.y + boundingBox.max.z / 2;
            const centerH = cameraposition[2] !== 0 ? center.y + cameraposition[2] - largestH.H / 2 : center.y + largestH.H / 2;
            
            camera.position.copy(new THREE.Vector3(centerE, centerH + 50, centerN));
            camera.lookAt(new THREE.Vector3(centerE, 0, centerN))
            controls.target.copy(new THREE.Vector3(centerE, centerH, centerN));
            console.log(boundingBox.max.z)

            basePts.map((pt) => {
              const sphereGeometry = new THREE.SphereGeometry(3, 32, 32); // Erstelle eine Kugelgeometrie
              const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
              const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
              sphere.position.set(pt.E, center.y + pt.H - largestH.H / 2, Math.floor(center.y / 1000) * 1000 - 500 - pt.N); // Setze die Position der Kugel basierend auf den Koordinaten des Punktes
              scene.add(sphere);
            })
          } else {
            console.log("not an Array")
          }
        } else {
          // `basePts` ist nicht definiert oder kein Array
          console.error("basePts is not defined .");
        }
        
        if (basePts && nextPts) {
          if (Array.isArray(basePts) && Array.isArray(nextPts)) {
            const largestH = basePts.reduce((prev, current) => (prev.H > current.H) ? prev : current);
            basePts.map((bpt) => {
              const npt = findCorrespondingNextPoint(bpt, nextPts);
              if (npt) {
                const deltaE = (npt.E - bpt.E) * 1000

                const pathE = new THREE.CatmullRomCurve3([
                  new THREE.Vector3(bpt.E, center.y + bpt.H - largestH.H / 2, Math.floor(center.y / 1000) * 1000 - 500 - bpt.N),
                  new THREE.Vector3(bpt.E + deltaE, center.y + bpt.H - largestH.H / 2, Math.floor(center.y / 1000) * 1000 - 500 - bpt.N)
                ]);

                const tubeGeomE = new THREE.TubeGeometry(pathE, 2, 1, 8, false)
                const tubeMatE = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                const tubeMeshE = new THREE.Mesh(tubeGeomE, tubeMatE);

                scene.add(tubeMeshE)

                
                const deltaN = (npt.N - bpt.N) * 1000

                const pathN = new THREE.CatmullRomCurve3([
                  new THREE.Vector3(bpt.E, center.y + bpt.H - largestH.H / 2, Math.floor(center.y / 1000) * 1000 - 500 - bpt.N),
                  new THREE.Vector3(bpt.E, center.y + bpt.H - largestH.H / 2, Math.floor(center.y / 1000) * 1000 - 500 - bpt.N + deltaN)
                ]);

                const tubeGeomN = new THREE.TubeGeometry(pathN, 2, 1, 8, false)
                const tubeMatN = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                const tubeMeshN = new THREE.Mesh(tubeGeomN, tubeMatN);

                scene.add(tubeMeshN)


                const deltaH = (npt.H - bpt.H) * 1000

                const pathH = new THREE.CatmullRomCurve3([
                  new THREE.Vector3(bpt.E, center.y + bpt.H - largestH.H / 2, Math.floor(center.y / 1000) * 1000 - 500 - bpt.N),
                  new THREE.Vector3(bpt.E, center.y + bpt.H - largestH.H / 2 + deltaH, Math.floor(center.y / 1000) * 1000 - 500 - bpt.N)
                ]);

                const tubeGeomH = new THREE.TubeGeometry(pathH, 2, 1, 8, false)
                const tubeMatH = new THREE.MeshBasicMaterial({ color: 0x0000ff });
                const tubeMeshH = new THREE.Mesh(tubeGeomH, tubeMatH);

                scene.add(tubeMeshH)
              }
            })
          }
        }
      },
      undefined,
      function (error: any) {
        console.error(error);
      }
    );

    const light = new THREE.AmbientLight(0x404040, 100); // soft white light
    scene.add(light);

    // OrbitControls erstellen und der Szene hinzufügen
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(
      camera.position.z,
      camera.position.x,
      camera.position.y
    );
    controls.maxDistance = 20000; // Maximaler Abstand zur Kamera
    controls.minDistance = 10; // Minimaler Abstand zur Kamera

    // Animationsfunktion
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // Starten der Animationsschleife
    animate();

    // Renderer-DOM-Element dem Container hinzufügen
    const rendererDomElement = renderer.domElement;
    threeContainerRef.current.appendChild(rendererDomElement);
    rendererRef.current = renderer;

    // Aufräumen beim Entfernen der Komponente
    return () => {
      controls.dispose();
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (rendererDomElement.parentNode) {
        rendererDomElement.parentNode.removeChild(rendererDomElement);
      }
    };
  }, [width, height, cameraposition]);

  return (
    <div
      ref={threeContainerRef}
      style={{ width, height }}
      className="p-4 rounded-xl"
    />
  );
};

export default ThreeScene;
