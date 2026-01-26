import React, { useEffect, useRef } from "react";

const CanvasCursor = () => {
    const canvasRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const trails = [];
    const totalTrails = 25; // number of trailing particles

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationId;

        // Resize canvas to fill the window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Initialize trail positions
        for (let i = 0; i < totalTrails; i++) {
            trails.push({ x: 0, y: 0 });
        }

        // Update mouse position
        const handleMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        // Draw loop
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
            ctx.strokeStyle = "rgba(188, 124, 72, 0.5)";
            ctx.lineWidth = 2;

            // Move trails toward the mouse position
            trails.forEach((trail, i) => {
                trail.x += (mousePos.current.x - trail.x) * 0.2;
                trail.y += (mousePos.current.y - trail.y) * 0.2;
                if (i > 0) {
                    const prev = trails[i - 1];
                    ctx.beginPath();
                    ctx.moveTo(prev.x, prev.y);
                    ctx.lineTo(trail.x, trail.y);
                    ctx.stroke();
                }
            });

            // Draw glowing main cursor
            const last = trails[trails.length - 1];
            ctx.beginPath();
            ctx.arc(last.x, last.y, 8, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(188, 124, 72, 0.8)"; // glow color
            ctx.fill();
            ctx.shadowBlur = 15;
            ctx.shadowColor = "rgba(188, 124, 72, 0.8)";
            ctx.closePath();

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[9999]"
        />
    );
};

export default CanvasCursor;
