import { FC, memo, useEffect } from 'react';
import { useAsyncReducer, UseAsyncReducerArgs } from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import { EditableProfileCard, profileReducer } from 'features/EditableProfile';
import { fetchProfile } from 'features/EditableProfile/model/services/fetchProfile/fetchProfile';
import { useDispatch } from 'react-redux';

interface ProfilePageProps {
    className?: string;
}

const asyncReducerArgs:UseAsyncReducerArgs = {
    options: [
        {reducerKey: 'profile', reducer: profileReducer}
    ]
};

const ProfilePage:FC<ProfilePageProps> = memo(() => {
    const dispatch = useDispatch();

    useAsyncReducer(asyncReducerArgs);

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    return (
        <div /* className={classNames(styles.ProfilePage, {}, [className])}*/>
            <EditableProfileCard />
        </div>
    );
});

export default ProfilePage;
