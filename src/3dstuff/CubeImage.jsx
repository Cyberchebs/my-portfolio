import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const CubeImage = ({ imageSrc }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(400, 400);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    mountRef.current.appendChild(renderer.domElement);

    // Load texture for front face
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageSrc);

    // Improve texture quality
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texture.generateMipmaps = true;

    // Create materials - image on front, bright glowing white on others
    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.2,
        metalness: 0.3,
        roughness: 0.2,
      }), // Right
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.2,
        metalness: 0.3,
        roughness: 0.2,
      }), // Left
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.2,
        metalness: 0.3,
        roughness: 0.2,
      }), // Top
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.2,
        metalness: 0.3,
        roughness: 0.2,
      }), // Bottom
      new THREE.MeshStandardMaterial({ map: texture }), // Front (your image)
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.2,
        metalness: 0.3,
        roughness: 0.2,
      }), // Back
    ];

    // Create cube
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Enhanced Lighting for glow effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1.5);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1.5);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    camera.position.z = 5;

    // Animation
    let floatOffset = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Only horizontal rotation (Y-axis)
      cube.rotation.y += 0.01;

      floatOffset += 0.02;
      cube.position.y = Math.sin(floatOffset) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      materials.forEach(mat => {
        if (mat.map) mat.map.dispose();
        mat.dispose();
      });
      renderer.dispose();
    };
  }, [imageSrc]);

  return (
    <div
      ref={mountRef}
      className="w-[400px] h-[400px] bg-black/90 backdrop-blur-sm  rounded-lg relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default CubeImage;
