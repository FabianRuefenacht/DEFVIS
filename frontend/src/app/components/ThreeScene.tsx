import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

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
    scene.background = new THREE.Color('#52525b');
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const loader = new GLTFLoader();

    loader.load('models/scene.gltf', function (gltf: any) {

      scene.add(gltf.scene);

    }, undefined, function (error: any) {

      console.error(error);

    });
    const light = new THREE.AmbientLight(0x404040, 100); // soft white light
    scene.add(light);

    // Kamera positionieren
    camera.position.z = 2;

    // OrbitControls erstellen und der Szene hinzufügen
    const controls = new OrbitControls(camera, renderer.domElement);

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

  return <div ref={threeContainerRef} style={{ width, height }} className='p-4 rounded-xl' />;
};

export default ThreeScene;
