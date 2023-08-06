import {useState, MouseEvent, useEffect} from "react"
import {bodyLock, bodyUnlock} from "../../lib"

interface IUseModalWindow {
    closeModalWindow: () => void;
    stopPropagation: any;
}

export function useModalWindow(
    hashUrl: string,
    visible: boolean,
    setVisible: (value: boolean) => void
): IUseModalWindow {
    const [hash, setHash] = useState<string>("")

    const closeModalWindow = () => {
        setVisible(false)
        if (hash === hashUrl) {
            window.history.pushState({}, document.title, window.location.pathname)
        }
    }

    const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {
        setHash(window.location.hash.substr(1))
    }, [])

    useEffect(() => {
        if (hash === hashUrl) {
            setVisible(true)
        }
    }, [hash])

    useEffect(() => {
        if (visible) {
            bodyLock()
        } else {
            bodyUnlock()
        }

        return () => {
            bodyUnlock()
        }
    }, [visible])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModalWindow()
                if (hash === hashUrl) {
                    window.history.pushState({}, document.title, window.location.pathname)
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return {closeModalWindow, stopPropagation}
}

