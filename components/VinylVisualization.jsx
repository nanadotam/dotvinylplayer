import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const VinylVisualization = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.CircleGeometry(5, 64);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const vinyl = new THREE.Mesh(geometry, material);
    scene.add(vinyl);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      vinyl.rotation.z += 0.01; // Spin effect
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default VinylVisualization; 