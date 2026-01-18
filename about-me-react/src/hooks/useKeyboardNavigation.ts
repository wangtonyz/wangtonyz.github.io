import { useEffect } from 'react';

export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Use arrow keys to navigate between sections
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const currentScroll = window.scrollY;
        const sections = Array.from(document.querySelectorAll('section'));
        const nextSection = sections.find(section => section.offsetTop > currentScroll);

        if (nextSection) {
          window.scrollTo({
            top: nextSection.offsetTop - 40,
            behavior: 'smooth'
          });
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const currentScroll = window.scrollY;
        const sections = Array.from(document.querySelectorAll('section')).reverse();
        const prevSection = sections.find(section => section.offsetTop < currentScroll);

        if (prevSection) {
          window.scrollTo({
            top: prevSection.offsetTop - 40,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};