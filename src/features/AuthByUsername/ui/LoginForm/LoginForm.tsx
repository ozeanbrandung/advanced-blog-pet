import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getAuthFormStateSelector } from '../../model/selectors/getAuthFormSelector/getAuthFormStateSelector';
import { authFormActions } from '../../model/slice/authFormSlice';
import { loginThunk } from '../../model/services/loginThunk/loginThunk';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpened?: boolean;
}

export const LoginForm:FC<LoginFormProps> = memo((props) => {
    const { className } = props;
    const {t} = useTranslation('default');

    const autoFocus = typeof props.isOpened !== 'undefined' ? props.isOpened : true;

    const {
        usernameInputValue,
        passwordInputValue,
        isLoading,
        error
    } = useSelector(getAuthFormStateSelector);

    const dispatch = useDispatch();

    function handleUsernameChange (value: string) {
        dispatch(authFormActions.setUsernameInputValue(value));
    }

    function handlePasswordChange (value: string) {
        dispatch(authFormActions.setPasswordInputValue(value));
    }

    function handleLoginClick() {
        dispatch(loginThunk({password: passwordInputValue, username: usernameInputValue}));
    }

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t('authFormTitle')}/>

            {error && <Text isError text={t('authError')} />}

            <Input
                value={usernameInputValue}
                onChange={handleUsernameChange}
                autoFocus={autoFocus}
                placeholder={t('username')}
                className={styles.input}
            />
            <Input
                value={passwordInputValue}
                onChange={handlePasswordChange}
                placeholder={t('password')}
                className={styles.input}
            />
            <Button
                onClick={handleLoginClick}
                disabled={isLoading}
                theme={ButtonThemes.OUTLINE}
                isRounded
                className={styles.button}
            >
                {t('LogIn')}
            </Button>
        </div>
    );
});
