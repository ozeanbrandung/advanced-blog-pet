import { FC, memo } from 'react';
import { profileReducer } from 'entities/Profile';
import { useAsyncReducer, UseAsyncReducerArgs } from 'shared/hooks/useAsyncReducer/useAsyncReducer';

//import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const asyncReducerArgs:UseAsyncReducerArgs = {
    options: [
        {reducerKey: 'profile', reducer: profileReducer}
    ]
};

const ProfilePage:FC<ProfilePageProps> = memo(() => {
    //const { className } = props;
    //const {t} = useTranslation('default');

    useAsyncReducer(asyncReducerArgs);

    return (
        <div /* className={classNames(styles.ProfilePage, {}, [className])}*/>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            PROFILE PAGE
        </div>
    );
});

export default ProfilePage;
