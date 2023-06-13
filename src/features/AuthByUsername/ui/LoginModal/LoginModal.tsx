import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpened: boolean;
    onClose: () => void;
}

export const LoginModal:FC<LoginModalProps> = (props) => {
    const { className, isOpened, onClose } = props;

    return (
        <Modal
            lazy
            isOpened={isOpened}
            onClose={onClose}
            className={classNames(styles.LoginModal, {}, [className])}
        >
            <LoginForm isOpened={isOpened} />
        </Modal>
    );
};
