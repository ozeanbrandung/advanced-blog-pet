import { FC, useEffect } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
//import styles from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { authFormActions } from '../../model/slice/authFormSlice';

interface LoginModalProps {
    className?: string;
    isOpened: boolean;
    onClose: () => void;
}

export const LoginModal:FC<LoginModalProps> = (props) => {
    const { className, isOpened, onClose } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        //только на закрытие
        if (!isOpened) {
            dispatch(authFormActions.clearAuthForm());
        }
    }, [isOpened, dispatch]);

    return (
        <Modal
            lazy
            isOpened={isOpened}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            <LoginForm isOpened={isOpened} />
        </Modal>
    );
};
