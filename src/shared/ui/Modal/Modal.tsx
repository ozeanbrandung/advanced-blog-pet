import { FC, MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
    className?: string;
    children: ReactNode;
    onClose?: () => void;
    isOpened: boolean;
}

const TIMEOUT_DELAY = 300;

export const Modal:FC<ModalProps> = (props) => {
    const { className, onClose, children, isOpened } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>();

    //если не передан он колуз вообще то и при нажатии на оверлэй ничего и не закрывается
    function handleClose() {
        if (onClose) {
            //onClose();
            setIsClosing(true);
            //таймауты помещаем обязательно в реф, потому что таймаут может
            //вызваться после анмаунта компонента и пртложение ляжет с ошибкой
            //реф убирает эту проблему
            //+ все асинхронные операции надо очищать в юз эффекте!
            timer.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, TIMEOUT_DELAY);
        }
    }

    function onKeyDown(e:KeyboardEvent) {
        if (e.key === 'Escape') {
            handleClose();
        }
    }

    useEffect(() => {
        //закрываем окно на escape
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timer.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened]);

    function handleContentClick(e: MouseEvent) {
        e.stopPropagation();
    }

    const mods:Record<string, boolean> = {
        [styles.opened]: isOpened,
        [styles.closing]: isClosing,
    };

    return (
        <Portal /* root={document.querySelector('.app')}*/ >
            <div className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={handleClose}>
                    <div className={styles.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
