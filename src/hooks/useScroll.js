import { useEffect } from "react";

export const useScroll = (deps) => {
    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, deps);
};