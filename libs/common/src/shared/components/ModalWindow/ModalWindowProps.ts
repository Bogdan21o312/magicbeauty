import {ReactNode} from "react";

export interface ModalWindowProps {
    children: ReactNode
    visible: boolean
    setVisible?: any
    title: string
    hashUrl: string
}
