import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getReadonlySelector } from '../../model/selectores/getReadonlySeelctor/getReadonlySelector';
import { profileActions } from '../../model/slice/profileSlice';
import styles from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader:FC<EditableProfileCardHeaderProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('profile');
    const readonly = useSelector(getReadonlySelector);
    const dispatch = useDispatch();

    const handleSetEditMode = useCallback(() => {
        dispatch(profileActions.setEditMode());
    }, [dispatch]);

    const handleResetForm = useCallback(() => {
        dispatch(profileActions.resetForm());
    }, [dispatch]);

    return (
        <div className={classNames(styles.EditableProfileCardHeader, {}, [className])}>
            <Text title={t('profile')} />

            {readonly ? (
                <Button onClick={handleSetEditMode} theme={ButtonThemes.OUTLINE}>{t('edit')}</Button>
            ) : (
                <Button onClick={handleResetForm} theme={ButtonThemes.OUTLINE}>{t('reset')}</Button>
            )}
        </div>
    );
};
