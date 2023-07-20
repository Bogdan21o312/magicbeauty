'use client'
import {useEffect} from "react"
import {ModalWindowProps} from "./ModalWindowProps";
import classes from "./ModalWindow.module.scss"
import {IconClose} from "../../assets";

export function ModalWindow({isModalWindow, setModalWindow, hash, title, children}: ModalWindowProps) {

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        handleModalClose()
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === `#${hash}`) {
        setModalWindow(true);
      } else {
        setModalWindow(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [hash])

  const handleModalClose = () => {
    setModalWindow(false);
    window.location.hash = '';
  }

  return (
    <div className={`${classes.main} ${isModalWindow ? classes.open : ''}`}>
      <div className={classes.top}>
        <button className={classes.close} onClick={handleModalClose}>
          <IconClose/>
        </button>
        {title && <div>{title}</div>}
      </div>
      {children}
    </div>
  )
}
