import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

interface ThreeSceneProps {
  width: number;
  height: number;
  point: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ width, height, point }) => {
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!threeContainerRef.current) return;

    // Szene, Kamera und Renderer erstellen
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color('#52525b');
    scene.background = new THREE.Color("#000000");
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const loader = new GLTFLoader();

    loader.load(
      "models/output.gltf",
      function (gltf: any) {
        scene.add(gltf.scene);
    
        // Hier das Zentrum des geladenen Modells bestimmen
        const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
        const center = boundingBox.getCenter(new THREE.Vector3());
    
        // Setze die Kamera-Position und das OrbitControls-Ziel auf das Zentrum des Modells
        camera.position.copy(center);
        controls.target.copy(center);
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
    controls.maxDistance = 10000; // Maximaler Abstand zur Kamera
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
  }, [width, height, point]);

  return (
    <div
      ref={threeContainerRef}
      style={{ width, height }}
      className="p-4 rounded-xl"
    />
  );
};

export default ThreeScene;
