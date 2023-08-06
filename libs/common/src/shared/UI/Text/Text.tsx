'use client'
import classes from "./Text.module.scss"
import {defaultElement, TextProps} from "./TextProps"
import {ElementType} from "react"

export function Text<E extends ElementType = typeof defaultElement>({as, type, opacity, light, children, center}: TextProps<E>) {
    const TagName = as || defaultElement

    const allClasses = [classes.clMain]

    if (center) allClasses.push(classes.clCenter)

    if (opacity) allClasses.push(classes.clOpacity)

    if (light) allClasses.push(classes.clLight)

    if (type === "titleBig") allClasses.push(classes.clTitleBig)
    if (type === "title") allClasses.push(classes.clTitle)
    if (type === "titleSub") allClasses.push(classes.clTitleSub)
    if (type === "text") allClasses.push(classes.clText)
    if (type === "textSmall") allClasses.push(classes.clTextSmall)
    if (type === "link") allClasses.push(classes.clLink)

    return (
        <TagName className={allClasses.join(' ')}>
            {children}
        </TagName>
    )
}
