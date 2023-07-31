'use client'
import classes from './ModalWindow.module.scss';
import {ModalWindowProps} from "./ModalWindowProps";
import {IconPlus} from "../../assets";
import {useModalWindow} from "./useModalWindow";
import {Text} from "../../UI"

export function ModalWindow({children, title, visible, setVisible, hashUrl}: ModalWindowProps) {
    const {closeModalWindow, stopPropagation} = useModalWindow(hashUrl, visible, setVisible);

    const isVisible = visible ? classes.active : '';
    const mainClasses = `${classes.modal} ${isVisible} ${hashUrl === hashUrl ? classes.showPopup : ''}`;

    return (
        <div
            className={mainClasses}
            onClick={() => closeModalWindow()}
        >
            <div className={classes.modalBody} onClick={stopPropagation}>
                <div className={classes.modalTop}>
                    <Text type={"title"}>{title}</Text>
                    <button onClick={closeModalWindow} className={classes.modalClose}>
                        <IconPlus/>
                    </button>
                </div>
                <div className={classes.modalContent}>{children}</div>
            </div>
        </div>
    )
}
