import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {RoutesPaths} from "shared/config/routesConfig/routesConfig";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {className} = props;

    return (
        <div className={classNames(styles.Navbar, {}, [])}>
            {/*<Link */}
            {/*    className={styles.link} */}
            {/*    to={RoutesPaths.about}*/}
            {/*>*/}
            {/*    About*/}
            {/*</Link>*/}
            <AppLink
                theme={AppLinkThemes.SECONDARY}
                className={styles.link}
                to={RoutesPaths.about}
            >
                About
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
                Main
            </AppLink>
        </div>
    );
};
