import React, { FC, useState } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {RoutesPaths} from 'shared/config/routesConfig/routesConfig';
import {AppLink, AppLinkThemes} from 'shared/ui/AppLink/AppLink';
import IconHome from 'shared/assets/icons/home.svg';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {className} = props;
    const {t} = useTranslation('default');
    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <div className={classNames(styles.Navbar, {}, [className])}>
                <div className={styles.links}>
                    <Button
                        theme={ButtonThemes.INITIAL}
                        onClick={() => setIsOpened(true)}
                        className={styles.link}
                    >
                        {t('LogIn')}
                    </Button>
                    <AppLink
                        theme={AppLinkThemes.SECONDARY}
                        className={styles.link}
                        to={RoutesPaths.main}
                    >
                        <IconHome />
                    </AppLink>
                </div>
            </div>

            <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
                <div>:)</div>
            </Modal>
        </>
    );
};
