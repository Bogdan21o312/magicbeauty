import {ReactNode} from "react";

export type ModalWindowProps = {
  isModalWindow: boolean
  setModalWindow: (state: boolean) => void
  hash: string
  title?: string
  children: ReactNode
}
