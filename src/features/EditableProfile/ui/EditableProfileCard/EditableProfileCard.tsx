import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfile} from '../../model/services/fetchProfile/fetchProfile';
import {getReadonlySelector} from '../../model/selectores/getReadonlySeelctor/getReadonlySelector';
import {getProfileErrorSelector} from '../../model/selectores/getProfileErrorSelector/getProfileErrorSelector';
import {
    getProfileIsLoadingSelector
} from '../../model/selectores/getProfileIsLoadingSelector/getProfileIsLoadingSelector';
import {inputsListConfig} from '../../model/inputsListConfig';
import {Card} from 'shared/ui/Card/Card';
import {EditableProfileCardHeader} from '../EditableProfileCardHeader/EditableProfileCardHeader';
import {Loader} from 'shared/ui/Loader/Loader';
import styles from './EditableProfileCard.module.scss';
import {Text, TextAlign} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import {EditableInput} from 'entities/EditableInput/EditableInput';
import {Profile, ValidateProfileError} from '../../model/types/profile';
import {getProfileAvatarSelector} from '../../model/selectores/getProfileDataSelector/getProfileDataSelector';
import {Avatar, AvatarModes} from 'shared/ui/Avatar/Avatar';
import {InputTypes} from 'shared/hooks/useInputWithData/useInputWithData';
import {EditableSelector} from 'entities/EditableSelector/EditableSelector';
import {useParams} from 'react-router-dom';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard:FC<EditableProfileCardProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('profile');
    const readonly = useSelector(getReadonlySelector);
    const dispatch = useDispatch();
    const validateErrors = useSelector(getProfileErrorSelector);
    const isLoading = useSelector(getProfileIsLoadingSelector);
    const avatar = useSelector(getProfileAvatarSelector);
    const {id} = useParams<{id: string}>();

    // useEffect(() => {
    //     if (__PROJECT__ !== Environment.STORYBOOK) {
    //         dispatch(fetchProfile({id: id}));
    //     }
    // }, [dispatch]);
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfile({id: id}));
        }
    });

    if (isLoading) {
        return (
            <div className={classNames(styles.EditableProfileCard, {}, [className, styles.loader])}>
                <Loader />
            </div>
        );
    }

    if (validateErrors?.includes(ValidateProfileError.SERVER_ERROR)) {
        return (
            <div className={classNames(styles.EditableProfileCard, {}, [className, styles.error])}>
                <Text text={t('profileFetchError')} isError align={TextAlign.CENTER} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.EditableProfileCard, {}, [className])}>
            <EditableProfileCardHeader />

            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Avatar className={styles.avatar} src={avatar}  alt="user photo" mode={AvatarModes.BIG}/>

            {validateErrors && validateErrors.map(error => <Text key={error} text={error} isError />)}

            <Card>
                {Object.entries(inputsListConfig).map(([key, inputConfig]) => {
                    if (inputConfig.type === InputTypes.INPUT) {
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
                    }

                    if (inputConfig.type === InputTypes.SELECTOR) {
                        return (
                            <EditableSelector
                                key={key}
                                className={styles.input}
                                options={inputConfig.config?.options || []}
                                selector={inputConfig.selector}
                                action={inputConfig.action}
                                payloadCreator={inputConfig.payloadCreator}
                                readonly={readonly}
                                //placeholder={key}
                            />
                        );
                    }
                })}
            </Card>
        </div>
    );
};
