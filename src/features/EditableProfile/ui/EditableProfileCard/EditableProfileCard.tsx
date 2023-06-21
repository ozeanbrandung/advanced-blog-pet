import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { profileThunk } from '../../model/services/profileThunk/profileThunk';
import { getReadonlySelector } from '../../model/selectores/getReadonlySeelctor/getReadonlySelector';
import { getProfileErrorSelector } from '../../model/selectores/getProfileErrorSelector/getProfileErrorSelector';
import {
    getProfileIsLoadingSelector
} from '../../model/selectores/getProfileIsLoadingSelector/getProfileIsLoadingSelector';
import { inputsListConfig } from '../../model/inputsListConfig';
import { Card } from 'shared/ui/Card/Card';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './EditableProfileCard.module.scss';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { EditableInput } from 'entities/EditableInput/EditableInput';
import { Profile } from 'features/EditableProfile/model/types/profile';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard:FC<EditableProfileCardProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('profile');
    const readonly = useSelector(getReadonlySelector);
    const dispatch = useDispatch();
    const error = useSelector(getProfileErrorSelector);
    const isLoading = useSelector(getProfileIsLoadingSelector);

    useEffect(() => {
        dispatch(profileThunk());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className={classNames(styles.EditableProfileCard, {}, [className, styles.loader])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.EditableProfileCard, {}, [className, styles.error])}>
                <Text text={t('profileFetchError')} isError align={TextAlign.CENTER} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.EditableProfileCard, {}, [className])}>
            <EditableProfileCardHeader />

            <Card>
                {Object.entries(inputsListConfig).map(([key, inputConfig]) => {
                    return (
                        <EditableInput<DeepPartial<Profile>>
                            key={key}
                            className={styles.input}
                            placeholder={key}
                            selector={inputConfig.selector}
                            action={inputConfig.action}
                            payloadCreator={inputConfig.payloadCreator}
                            readonly={readonly}
                        />
                    );
                })}
            </Card>
        </div>
    );
};
