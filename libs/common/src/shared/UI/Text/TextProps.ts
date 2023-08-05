import {ComponentProps, ElementType, ReactNode} from "react"

type TextOwnProps<E extends ElementType = ElementType> = {
    children: ReactNode
    type?: "titleBig" | "title" | "titleSub" | "text" | "textSmall" | "link"
    as?: E
    center?: boolean
    opacity?: boolean
    light?: boolean
};

export type TextProps<E extends ElementType> = TextOwnProps<E> &
    Omit<ComponentProps<E>, keyof TextOwnProps>;

export const defaultElement = "div"
