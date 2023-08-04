'use client'
import {useLayoutEffect, useState} from "react";

export function useScrollLessThanY(maxScrollY: number) {
    const [scrollLessThanY, setScrollLessThanY] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > maxScrollY) {
            setScrollLessThanY(true);
        } else {
            setScrollLessThanY(false);
        }
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollLessThanY;
}
