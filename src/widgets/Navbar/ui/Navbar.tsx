import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {RoutesPaths} from "shared/config/routesConfig/routesConfig";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {className} = props;
    const {t} = useTranslation('default')

    return (
        <div className={classNames(styles.Navbar, {}, [])}>
            {/*<Link */}
            {/*    className={styles.link} */}
            {/*    to={RoutesPaths.about}*/}
            {/*>*/}
            {/*    About*/}
            {/*</Link>*/}

            <div className={styles.links}>
                <AppLink
                    theme={AppLinkThemes.SECONDARY}
                    className={styles.link}
                    to={RoutesPaths.about}
                >
                    {t('About')}
                </AppLink>
                {/*<Link */}
                {/*    className={styles.link} */}
                {/*    to={RoutesPaths.main}*/}
                {/*>*/}
                {/*    Main*/}
                {/*</Link>*/}
                <AppLink
                    theme={AppLinkThemes.SECONDARY}
                    className={styles.link}
                    to={RoutesPaths.main}
                >
                    {t('Main')}
                </AppLink>
            </div>
        </div>
    );
};
