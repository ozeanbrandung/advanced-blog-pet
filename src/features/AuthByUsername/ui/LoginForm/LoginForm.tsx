import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { authFormActions, authFormReducer } from '../../model/slice/authFormSlice';
import { loginThunk } from '../../model/services/loginThunk/loginThunk';
import { useAsyncReducer, UseAsyncReducerEntry } from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import { getUsernameInputValue } from '../../model/selectors/getUsernameInputValue/getUsernameInputValue';
import { getPasswordInputValue } from '../../model/selectors/getPasswordInputValue/getPasswordInputValue';
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading';
import { getError } from '../../model/selectors/getError/getError';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    isOpened?: boolean;
}

const asyncReducersOptions:UseAsyncReducerEntry[] = [{
    reducerKey: 'authForm',
    reducer: authFormReducer
}];

const LoginForm:FC<LoginFormProps> = memo((props) => {
    const { className } = props;
    const {t} = useTranslation('default');

    const autoFocus = typeof props.isOpened !== 'undefined' ? props.isOpened : true;

    useAsyncReducer({
        //не тут прописываем объект а вне компонента - так не будет пересоздаваться объект 1000 раз
        options: asyncReducersOptions,
        //beforeDestroy: () => dispatch(authFormActions.clearAuthForm())
    });

    // const {
    //     usernameInputValue,
    //     passwordInputValue,
    //     isLoading,
    //     error
    // } = useSelector(getAuthFormStateSelector);
    const usernameInputValue = useSelector(getUsernameInputValue);
    const passwordInputValue = useSelector(getPasswordInputValue);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

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

    // useEffect(() => {
    //     return () => {
    //         dispatch(authFormActions.clearAuthForm());
    //     };
    // }, []);

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

export default LoginForm;
