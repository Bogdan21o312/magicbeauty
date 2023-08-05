'use client'
import {useState} from "react"
import {Button, ModalWindow} from "@magicbeauty/common"

export function Test() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    // Функція, що показує модальне вікно
    const openModal = () => {
        setIsModalVisible(true)
    }

    // Функція, що закриває модальне вікно
    const closeModal = () => {
        setIsModalVisible(false)
    }

    return (
        <div>
            <Button onClick={openModal}>lorem</Button>
            <ModalWindow
                title="Заголовок модального вікна"
                visible={isModalVisible}
                setVisible={setIsModalVisible}
                hashUrl={'#popup'}
            >
                <p>Це вміст модального вікна.</p>
                <button onClick={closeModal}>Закрити</button>
            </ModalWindow>
        </div>
    )
}
