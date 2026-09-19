import { useState } from "react";

const useMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen((previous) => !previous);
    };

    return {
        isOpen,
        openMenu,
        closeMenu,
        toggleMenu,
    };
};

export default useMobileMenu;