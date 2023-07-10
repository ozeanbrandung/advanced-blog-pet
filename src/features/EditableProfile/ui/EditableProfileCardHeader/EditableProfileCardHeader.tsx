import {FC, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonThemes} from 'shared/ui/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {getReadonlySelector} from '../../model/selectores/getReadonlySeelctor/getReadonlySelector';
import {profileActions} from '../../model/slice/profileSlice';
import styles from './EditableProfileCardHeader.module.scss';
import {saveProfileChanges} from 'features/EditableProfile/model/services/saveProfileChanges/saveProfileChanges';
import {
    getProfileDataSelector,
    getProfileFormSelector
} from 'features/EditableProfile/model/selectores/getProfileDataSelector/getProfileDataSelector';
import {getUserAuthDataSelector} from 'entities/User';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader:FC<EditableProfileCardHeaderProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('profile');
    const readonly = useSelector(getReadonlySelector);
    const dispatch = useDispatch();
    const form = useSelector(getProfileFormSelector);
    //TODO: вместо вот этих двух селекторов можно было бы заюзать реселект единственный
    const authData = useSelector(getUserAuthDataSelector);
    const profileData = useSelector(getProfileDataSelector);
    //const {id} = useParams();
    
    //const isEditable = id === authData?.id;
    const isEditable = profileData?.id === authData?.id;

    const handleSetEditMode = useCallback(() => {
        dispatch(profileActions.setEditMode());
    }, [dispatch]);

    const handleResetForm = useCallback(() => {
        dispatch(profileActions.resetForm());
    }, [dispatch]);

    const handleSaveChanges = useCallback(() => {
        dispatch(saveProfileChanges(form));
    }, [dispatch, form]);

    return (
        <div className={classNames(styles.EditableProfileCardHeader, {}, [className])}>
            <Text title={t('profile')} />
            {isEditable && (
                <>
                    {readonly ? (
                        <Button onClick={handleSetEditMode} theme={ButtonThemes.OUTLINE}>{t('edit')}</Button>
                    ) : (
                        <div>
                            <Button
                                className={styles.button}
                                onClick={handleSaveChanges}
                                theme={ButtonThemes.OUTLINE}
                            >
                                {t('save')}
                            </Button>

                            <Button
                                className={styles.button}
                                onClick={handleResetForm}
                                theme={ButtonThemes.BACKGROUND_INVERTED}
                            >
                                {t('reset')}
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
