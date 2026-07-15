import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
    };

    const handleMouseMove = (event) => {
      mouse.targetX = event.clientX;
      mouse.targetY = event.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Warp effect from mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 1.5;
          this.y -= (dy / distance) * force * 1.5;
        }

        // Boundary checks
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(204, 255, 0, ${this.alpha})`;
        ctx.shadowColor = '#CCFF00';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Grid properties
    let gridOffset = 0;
    const gridSpeed = 0.5;

    // Render loop
    const render = () => {
      // Smooth mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // --- Draw Grid ---
      ctx.strokeStyle = 'rgba(204, 255, 0, 0.04)';
      ctx.lineWidth = 1;

      // 3D Grid Perspective Lines
      const vanishingPointX = width / 2 + (mouse.x - width / 2) * 0.1;
      const vanishingPointY = height * 0.2 + (mouse.y - height / 2) * 0.08;

      // Draw perspective rays
      const rayCount = 28;
      for (let i = 0; i <= rayCount; i++) {
        const angle = (i / rayCount) * Math.PI + Math.PI; // Bottom half semi-circle
        const targetX = vanishingPointX + Math.cos(angle) * width * 1.5;
        const targetY = height + Math.sin(angle) * height * 0.5;

        ctx.beginPath();
        ctx.moveTo(vanishingPointX, vanishingPointY);
        ctx.lineTo(targetX, targetY);
        ctx.stroke();
      }

      // Horizontal lines (scrolling perspective effect)
      gridOffset = (gridOffset + gridSpeed) % 40;
      const horizontalLineCount = 15;
      for (let i = 0; i < horizontalLineCount; i++) {
        // Logarithmic spacing for perspective
        const k = (i * 40 + gridOffset) / (horizontalLineCount * 40);
        const y = vanishingPointY + k * k * (height - vanishingPointY);

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = `rgba(204, 255, 0, ${0.01 + k * 0.06})`;
        ctx.stroke();
      }

      // --- Draw Interactive Mouse Glow ---
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        mouse.radius
      );
      gradient.addColorStop(0, 'rgba(204, 255, 0, 0.06)');
      gradient.addColorStop(1, 'rgba(204, 255, 0, 0)');

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // --- Draw and Update Particles ---
      particles.forEach((particle) => {
        particle.update();
        particle.draw();

        // Draw line connections between particles and mouse if close
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(204, 255, 0, ${0.1 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
};

export default CanvasBackground;
