import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {RoutesPaths} from 'shared/config/routesConfig/routesConfig';
import {AppLink, AppLinkThemes} from 'shared/ui/AppLink/AppLink';
import IconHome from 'shared/assets/icons/home.svg';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {className} = props;

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            {/*<Link */}
            {/*    className={styles.link} */}
            {/*    to={RoutesPaths.about}*/}
            {/*>*/}
            {/*    About*/}
            {/*</Link>*/}

            <div className={styles.links}>
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
                    <IconHome />
                </AppLink>
            </div>
        </div>
    );
};
