import {FC} from 'react';
//import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Profile.module.scss';

interface ProfileProps {
    className?: string;
}

export const Profile:FC<ProfileProps> = (props) => {
    const { className } = props;
    //const {t} = useTranslation('default');

    return (
        <div className={classNames(styles.Profile, {}, [className])}>

        </div>
    );
};
