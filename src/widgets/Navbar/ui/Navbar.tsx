import React, { FC, memo, useEffect, useState } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {RoutesPaths} from 'shared/config/routesConfig/routesConfig';
import {AppLink, AppLinkThemes} from 'shared/ui/AppLink/AppLink';
import IconHome from 'shared/assets/icons/home.svg';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthDataSelector } from 'entities/User';
import { userActions } from 'entities/User';
import {useNavigate} from 'react-router-dom';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = memo((props) => {
    const {className} = props;
    const {t} = useTranslation('default');
    const authData = useSelector(getUserAuthDataSelector);
    const dispatch = useDispatch();
    const [isOpened, setIsOpened] = useState(false);

    const navigate = useNavigate();
    function handleClose() {
        setIsOpened(false);
    }

    function handleOpen() {
        setIsOpened(true);
    }

    function handleLogOut() {
        dispatch(userActions.removeAuthData());
    }

    function handleNavigateCreateArticle() {
        navigate(RoutesPaths['article-create']);
    }

    useEffect(() => {
        if (authData) {
            setIsOpened(false);
        }
    }, [authData]);

    //TODO: тут потом сделаем свою разметку для навбара рареганного пользователя
    // if (authData) {
    //     <div className={classNames(styles.Navbar, {}, [className])}>
    //     </div>
    // }

    return (
        <>
            <header className={classNames(styles.Navbar, {}, [className])}>
                {authData && (
                    <Button
                        theme={ButtonThemes.INITIAL}
                        onClick={handleNavigateCreateArticle}
                        className={classNames(styles.link, {}, [styles.linkCreate])}
                    >
                        {t('createNewArticle')}
                    </Button>
                )}
                

                <div className={styles.links}>
                    {!authData ? (
                        <Button
                            theme={ButtonThemes.INITIAL}
                            onClick={handleOpen}
                            className={styles.link}
                        >
                            {t('LogIn')}
                        </Button>
                    ) : (

                        <Button
                            theme={ButtonThemes.INITIAL}
                            onClick={handleLogOut}
                            className={styles.link}
                        >
                            {t('LogOut')}
                        </Button>
                    )}

                    <AppLink
                        theme={AppLinkThemes.SECONDARY}
                        className={styles.link}
                        to={RoutesPaths.main}
                    >
                        <IconHome />
                    </AppLink>
                </div>
            </header>

            {isOpened && <LoginModal isOpened={isOpened} onClose={handleClose}/>}
        </>
    );
});
