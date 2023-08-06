'use client'
import {useState, useEffect} from "react"

export const useMediaQuery = (query = 1200) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${query}px)`)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        window.addEventListener("resize", listener)
        return () => window.removeEventListener("resize", listener)
    }, [matches])

    return matches
}
