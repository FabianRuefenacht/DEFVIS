import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

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
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ width, height, basePts }) => {
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!threeContainerRef.current) return;

    // Szene, Kamera und Renderer erstellen
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#FFFFFF");
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const loader = new GLTFLoader();

    loader.load(
      "models/GO.gltf",
      function (gltf: any) {
        scene.add(gltf.scene);

        // Hier das Zentrum des geladenen Modells bestimmen
        const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
        const center = boundingBox.getCenter(new THREE.Vector3());

        // Setze die Kamera-Position und das OrbitControls-Ziel auf das Zentrum des Modells
        camera.position.copy(new THREE.Vector3(center.x, center.y + boundingBox.max.z / 2, center.z));
        controls.target.copy(new THREE.Vector3(center.x, center.y, center.z));

        if (basePts) {
          // `basePts` ist definiert und ein Array
          if (Array.isArray(basePts)) {
            basePts.map((pt) => {
              const sphereGeometry = new THREE.SphereGeometry(3, 32, 32); // Erstelle eine Kugelgeometrie
              const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
              const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
              sphere.position.set(pt.E, center.y + pt.H / 2, Math.floor(center.y / 1000) * 1000 + 500 - pt.N ); // Setze die Position der Kugel basierend auf den Koordinaten des Punktes
              scene.add(sphere);
            })
          } else {
            console.log("not an Array")
          }
        } else {
          // `basePts` ist nicht definiert oder kein Array
          console.error("basePts is not defined .");
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
  }, [width, height]);

  return (
    <div
      ref={threeContainerRef}
      style={{ width, height }}
      className="p-4 rounded-xl"
    />
  );
};

export default ThreeScene;
