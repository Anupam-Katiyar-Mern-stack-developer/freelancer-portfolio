import { useEffect, useState } from "react";

const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    isScrolled,
    toggleMenu,
    closeMenu,
  };
};

export default useNavbar;