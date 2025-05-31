
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const frameId = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create low-poly shapes
    const shapes: THREE.Mesh[] = [];
    const colors = [0x3b82f6, 0x8b5cf6, 0x06b6d4, 0x10b981, 0xf59e0b];

    for (let i = 0; i < 15; i++) {
      const geometries = [
        new THREE.TetrahedronGeometry(Math.random() * 2 + 1, 0),
        new THREE.OctahedronGeometry(Math.random() * 2 + 1, 0),
        new THREE.IcosahedronGeometry(Math.random() * 2 + 1, 0)
      ];
      
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({ 
        color: colors[Math.floor(Math.random() * colors.length)],
        flatShading: true,
        transparent: true,
        opacity: 0.7
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      shapes.push(mesh);
      scene.add(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    camera.position.z = 30;

    // Animation
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.005 + index * 0.001;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });
      
      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ThreeBackground;
