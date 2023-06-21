import { FC, memo, useEffect } from 'react';
import { useAsyncReducer, UseAsyncReducerArgs } from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import { EditableProfileCard, profileReducer } from 'features/EditableProfile';
import { profileThunk } from 'features/EditableProfile/model/services/profileThunk/profileThunk';
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
        dispatch(profileThunk());
    }, [dispatch]);

    return (
        <div /* className={classNames(styles.ProfilePage, {}, [className])}*/>
            <EditableProfileCard />
        </div>
    );
});

export default ProfilePage;
