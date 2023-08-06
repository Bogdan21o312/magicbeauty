'use client'
import classes from "./Loader.module.scss"

export function Loader() {
    return (
        <div className={classes.spinner}>
            <div className={classes.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
