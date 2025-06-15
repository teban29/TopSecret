import React, { useEffect, useRef } from 'react';

export const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configurar el canvas para que ocupe toda la página (no solo el viewport)
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = document.documentElement.scrollWidth;
      const height = document.documentElement.scrollHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
    };

    // Crear estrellas
    let stars = [];
    const createStars = () => {
      const width = document.documentElement.scrollWidth;
      const height = document.documentElement.scrollHeight;
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5,
        brightness: Math.random()
      }));
    };

    // Dibujar la luna
    const drawMoon = () => {
      const width = document.documentElement.scrollWidth;
      const height = document.documentElement.scrollHeight;
      const moonX = width * 0.8;
      const moonY = height * 0.2;
      const moonRadius = 50;
      const gradient = ctx.createRadialGradient(
        moonX, moonY, 0,
        moonX, moonY, moonRadius
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // Función de animación
    const animate = () => {
      const width = document.documentElement.scrollWidth;
      const height = document.documentElement.scrollHeight;
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, width, height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });
      drawMoon();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    resizeCanvas();
    createStars();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ width: '100%', height: '100%', display: 'block', background: 'transparent', border: 'none', margin: 0, padding: 0 }}
    />
  );
}; 