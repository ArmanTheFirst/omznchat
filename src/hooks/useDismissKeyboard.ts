import { useEffect, useRef } from 'react';

export function useDismissKeyboard(active = true) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || typeof document === 'undefined') return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // If we don't have a ref to the container, do nothing
      if (!containerRef.current) return;
      
      // Find any active input or textarea within the container
      const activeElement = document.activeElement as HTMLElement;
      const isInputFocused = 
        activeElement && 
        (activeElement.tagName === 'INPUT' || 
         activeElement.tagName === 'TEXTAREA') &&
        containerRef.current.contains(activeElement);
      
      // If there's an active input and the click is outside the container
      if (isInputFocused && 
          event.target instanceof Node && 
          !containerRef.current.contains(event.target)) {
        // Blur the active element to dismiss the keyboard
        activeElement.blur();
      }
    };

    // Add both touch and mouse events for better compatibility
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [active]);

  return { containerRef };
}
