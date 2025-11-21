import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      // Fallback for environments that don't support smooth behavior
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
