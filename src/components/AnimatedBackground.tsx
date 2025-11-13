import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Code snippets
    const codeSnippets = [
      'const AI = () => {}',
      'function train() {}',
      'import tensorflow',
      'import torc',
      'from datasets import load_dataset',
      'from transformers import AutoTokenizer',
      'import AutoModelForCausalLM', 
      'import Trainer', 
      'import TrainingArguments',
      'neural.network()',
      'async learn()',
      'class Model {}',
      'if (intelligent)',
      'while (learning)',
      'for (i in data)',
      'def predict():',
      'let brain = new AI()',
      'return solution',
      'import numpy as np',
      'import matplotlib.pyplot as plt'
    ];

    // Particles for code
    class CodeParticle {
      x: number;
      y: number;
      speed: number;
      text: string;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = 0.2 + Math.random() * 0.5;
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.opacity = 0.1 + Math.random() * 0.3;
      }

      update() {
        this.y -= this.speed;
        if (this.y < -20) {
          this.y = canvas.height + 20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.font = '12px monospace';
        ctx.fillStyle = `hsla(180, 100%, 50%, ${this.opacity})`;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
      }
    }

    // Neural network nodes
    class NeuralNode {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      connections: number[];
      
      constructor(index: number) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 2 + Math.random() * 3;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.connections = [];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(280, 100%, 70%, 0.6)';
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'hsl(280, 100%, 70%)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create particles
    const codeParticles: CodeParticle[] = [];
    for (let i = 0; i < 30; i++) {
      codeParticles.push(new CodeParticle());
    }

    // Create neural nodes
    const neuralNodes: NeuralNode[] = [];
    for (let i = 0; i < 40; i++) {
      neuralNodes.push(new NeuralNode(i));
    }

    // Grid
    const drawGrid = () => {
      ctx.strokeStyle = 'hsla(180, 100%, 50%, 0.05)';
      ctx.lineWidth = 1;

      const gridSize = 50;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Draw connections between close nodes
    const drawConnections = () => {
      ctx.strokeStyle = 'hsla(320, 100%, 60%, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < neuralNodes.length; i++) {
        for (let j = i + 1; j < neuralNodes.length; j++) {
          const dx = neuralNodes[i].x - neuralNodes[j].x;
          const dy = neuralNodes[i].y - neuralNodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(neuralNodes[i].x, neuralNodes[i].y);
            ctx.lineTo(neuralNodes[j].x, neuralNodes[j].y);
            ctx.globalAlpha = 1 - distance / 150;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      drawGrid();

      // Update and draw code particles
      codeParticles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw neural nodes
      neuralNodes.forEach(node => {
        node.update();
      });

      // Draw connections
      drawConnections();

      // Draw nodes on top
      neuralNodes.forEach(node => {
        node.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default AnimatedBackground;
