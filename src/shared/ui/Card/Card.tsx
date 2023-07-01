import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Card.module.scss';

interface CardProps {
    className?: string;
    children: ReactNode;
}

export const Card:FC<CardProps> = (props) => {
    const { className, children } = props;
    //const {t} = useTranslation('profile');
    // const dispatch = useAppDispatch();
    // const profileData = useSelector(getProfileDataSelector);
    // const error = useSelector(getProfileErrorSelector);
    // const isLoading = useSelector(getProfileIsLoadingSelector);
    //
    // console.log(profileData);
    //
    // useEffect(() => {
    //     dispatch(profileThunk());
    // }, [dispatch]);

    // if (isLoading) {
    //     return <Loader />;
    // }
    //
    // if (error) {
    //     return <ErroredButton />;
    // }

    return (
        <div className={classNames(styles.Card, {}, [className])}>
            {children}
            {/*<Input*/}
            {/*    className={styles.input}*/}
            {/*    // value={profileData?.name}*/}
            {/*    placeholder={t('namePlaceholder')}*/}
            {/*    readOnly*/}
            {/*/>*/}

            {/*<Input*/}
            {/*    className={styles.input}*/}
            {/*    //value={profileData?.lastname}*/}
            {/*    placeholder={t('lastnamePlaceholder')}*/}
            {/*    readOnly*/}
            {/*/>*/}
        </div>
    );
};
