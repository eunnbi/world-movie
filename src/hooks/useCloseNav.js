import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const useCloseNav = () => {
    const [showNav, setShowNav] = useOutletContext();
    useEffect(() => {
        if (showNav) setShowNav();
    }, []);
};