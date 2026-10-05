import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroDepthSceneProps {
  pointer: { x: number; y: number };
}

export const HeroDepthScene: React.FC<HeroDepthSceneProps> = ({ pointer }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerCurrent = useRef({ x: 0, y: 0 });

  useEffect(() => {
    pointerTarget.current = {
      x: pointer.x * 0.35,
      y: pointer.y * 0.25,
    };
  }, [pointer]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0d1b2a, 1.5);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xe0c9a6, 2.5, 30);
    goldLight.position.set(6, 4, 8);
    scene.add(goldLight);

    const navyLight = new THREE.PointLight(0x1b2638, 3.5, 40);
    navyLight.position.set(-8, -4, 6);
    scene.add(navyLight);

    // Architectural Glass Slabs / Dimensional Planes
    const group = new THREE.Group();
    scene.add(group);

    const slabs: THREE.Mesh[] = [];

    // Main central tilted glass slab
    const slabGeo1 = new THREE.BoxGeometry(7.5, 9.5, 0.08);
    const glassMat1 = new THREE.MeshPhysicalMaterial({
      color: 0x1b2638,
      transparent: true,
      opacity: 0.22,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.6,
      ior: 1.4,
      reflectivity: 0.5,
      clearcoat: 0.8,
      wireframe: false,
    });
    const slab1 = new THREE.Mesh(slabGeo1, glassMat1);
    slab1.position.set(1.5, 0, -1);
    slab1.rotation.set(-0.08, -0.22, 0.04);
    group.add(slab1);
    slabs.push(slab1);

    // Subtle edge highlight frame
    const edges1 = new THREE.EdgesGeometry(slabGeo1);
    const lineMat1 = new THREE.LineBasicMaterial({
      color: 0xe0c9a6,
      transparent: true,
      opacity: 0.25,
    });
    const wireframe1 = new THREE.LineSegments(edges1, lineMat1);
    slab1.add(wireframe1);

    // Secondary offset reflective panel (Upper Left)
    const slabGeo2 = new THREE.PlaneGeometry(5, 7);
    const glassMat2 = new THREE.MeshStandardMaterial({
      color: 0x0d1b2a,
      transparent: true,
      opacity: 0.18,
      roughness: 0.3,
      metalness: 0.6,
      side: THREE.DoubleSide,
    });
    const slab2 = new THREE.Mesh(slabGeo2, glassMat2);
    slab2.position.set(-4.5, 1.8, -3);
    slab2.rotation.set(0.12, 0.28, -0.06);
    group.add(slab2);
    slabs.push(slab2);

    const edges2 = new THREE.EdgesGeometry(slabGeo2);
    const lineMat2 = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12,
    });
    const wireframe2 = new THREE.LineSegments(edges2, lineMat2);
    slab2.add(wireframe2);

    // Horizontal grounding mirror plane (Floor Reflection)
    const floorGeo = new THREE.PlaneGeometry(28, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x080e14,
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
      metalness: 0.8,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(0, -5.2, 0);
    floor.rotation.set(-Math.PI / 2 + 0.12, 0, 0);
    group.add(floor);

    // Subtle grid lines on the plane for spatial perspective
    const grid = new THREE.GridHelper(26, 20, 0xc5a059, 0x1b2638);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.08;
    grid.position.set(0, -5.18, 0);
    grid.rotation.set(0.12, 0, 0);
    group.add(grid);

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId: number;
    let isVisible = true;

    // Intersection observer to pause rendering when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || !renderer) return;

      const elapsed = clock.getElapsedTime();

      // Smooth pointer lerp
      if (!prefersReducedMotion) {
        pointerCurrent.current.x += (pointerTarget.current.x - pointerCurrent.current.x) * 0.05;
        pointerCurrent.current.y += (pointerTarget.current.y - pointerCurrent.current.y) * 0.05;

        // Subtle camera and group tilt
        group.rotation.y = pointerCurrent.current.x * 0.25 + Math.sin(elapsed * 0.2) * 0.02;
        group.rotation.x = -pointerCurrent.current.y * 0.2 + Math.cos(elapsed * 0.25) * 0.015;

        // Floating breath
        slab1.position.y = Math.sin(elapsed * 0.5) * 0.12;
        slab2.position.y = 1.8 + Math.cos(elapsed * 0.4) * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      // Dispose Three.js resources
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
      slabGeo1.dispose();
      glassMat1.dispose();
      edges1.dispose();
      lineMat1.dispose();
      slabGeo2.dispose();
      glassMat2.dispose();
      edges2.dispose();
      lineMat2.dispose();
      floorGeo.dispose();
      floorMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
