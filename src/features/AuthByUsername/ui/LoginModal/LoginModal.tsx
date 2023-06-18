import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
//import styles from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpened: boolean;
    onClose: () => void;
}

export const LoginModal:FC<LoginModalProps> = (props) => {
    const { className, isOpened, onClose } = props;

    //const dispatch = useDispatch();

    // useEffect(() => {
    //     //только на закрытие
    //     if (!isOpened) {
    //         dispatch(authFormActions.clearAuthForm());
    //     }
    // }, [isOpened, dispatch]);

    return (
        <Modal
            lazy
            isOpened={isOpened}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginForm isOpened={isOpened} />
            </Suspense>
        </Modal>
    );
};
