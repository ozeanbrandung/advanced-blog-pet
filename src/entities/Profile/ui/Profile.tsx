import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Profile.module.scss';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { profileThunk } from '../model/services/profileThunk/profileThunk';
import { useSelector } from 'react-redux';
import { getProfileDataSelector } from '../model/selectores/getProfileDataSelector/getProfileDataSelector';
import { getProfileErrorSelector } from '../model/selectores/getProfileErrorSelector/getProfileErrorSelector';
import {
    getProfileIsLoadingSelector
} from '../model/selectores/getProfileIsLoadingSelector/getProfileIsLoadingSelector';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { ErroredButton } from 'shared/ui/ErroredButton/ErroredButton';

interface ProfileProps {
    className?: string;
}

export const Profile:FC<ProfileProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const profileData = useSelector(getProfileDataSelector);
    const error = useSelector(getProfileErrorSelector);
    const isLoading = useSelector(getProfileIsLoadingSelector);

    console.log(profileData);

    useEffect(() => {
        dispatch(profileThunk());
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErroredButton />;
    }

    return (
        <div className={classNames(styles.Profile, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('profile')}/>

                <Button theme={ButtonThemes.OUTLINE}>{t('edit')}</Button>
            </div>

            <div>
                <Input
                    className={styles.input}
                    value={profileData?.name}
                    placeholder={t('namePlaceholder')}
                    readOnly
                />

                <Input
                    className={styles.input}
                    value={profileData?.lastname}
                    placeholder={t('lastnamePlaceholder')}
                    readOnly
                />
            </div>
        </div>
    );
};
