// Performance optimization utilities

/**
 * Preload critical resources
 */
export const preloadImage = (src: string) => {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  }
};

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImage = (
  element: HTMLImageElement,
  src: string,
  callback?: () => void
) => {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.src = src;
          element.classList.remove("lazy");
          observer.unobserve(element);
          callback?.();
        }
      });
    });
    observer.observe(element);
  } else {
    // Fallback for browsers without IntersectionObserver
    element.src = src;
    callback?.();
  }
};

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if device prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Get optimal image format based on browser support
 */
export const getOptimalImageFormat = (): "webp" | "avif" | "jpg" => {
  if (typeof window === "undefined") return "jpg";

  const canvas = document.createElement("canvas");
  if (canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0) {
    return "webp";
  }
  if (canvas.toDataURL("image/avif").indexOf("data:image/avif") === 0) {
    return "avif";
  }
  return "jpg";
};
