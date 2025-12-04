import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

export const ScrollManager = () => {
    const { pathname } = useLocation();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // Increased for smoother, more gradual scrolling
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1, // Standard wheel sensitivity
            touchMultiplier: 2, // Smooth touch scrolling
            infinite: false,
            autoResize: true,
            lerp: 0.1, // Lower value = smoother, more gradual (0.1 is very smooth)
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};
