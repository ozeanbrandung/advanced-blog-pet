import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
    isOpened?: boolean;
}

export const LoginForm:FC<LoginFormProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('default');
    // const [usernameValue, setUsernameValue] = useState('');
    // const [passwordValue, setPasswordValue] = useState('');
    const autoFocus = typeof props.isOpened !== 'undefined' ? props.isOpened : true;

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input
                //autoFocus
                //value={usernameValue}
                //onChange={value => setUsernameValue(value)}
                autoFocus={autoFocus}
                placeholder={t('username')}
                className={styles.input}
            />
            <Input
                //value={passwordValue}
                //onChange={value => setPasswordValue(value)}
                placeholder={t('password')}
                className={styles.input}
            />
            <Button theme={ButtonThemes.OUTLINE} isRounded className={styles.button}>
                {t('LogIn')}
            </Button>
        </div>
    );
};
