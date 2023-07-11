import {FC, memo} from 'react';
import {useAsyncReducer, UseAsyncReducerArgs} from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import {EditableProfileCard, profileReducer} from 'features/EditableProfile';
import {fetchProfile} from 'features/EditableProfile/model/services/fetchProfile/fetchProfile';
import {useDispatch} from 'react-redux';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useParams} from 'react-router-dom';

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
    //const authData = useSelector(getUserAuthDataSelector);
    const {id} = useParams();

    useAsyncReducer(asyncReducerArgs);

    // useEffect(() => {
    //     if (__PROJECT__ !== Environment.STORYBOOK) {
    //         dispatch(fetchProfile());
    //     }
    // }, [dispatch]);
    useInitialEffect(() => {
        //логику с id следует перенести в sidebar - так грамотнее
        //const argsId = id || authData?.id;
        //if(argsId) {
        if (id) {
            dispatch(fetchProfile({id: id}));
        }
        //}
    });

    return (
        <div /* className={classNames(styles.ProfilePage, {}, [className])}*/>
            <EditableProfileCard />
        </div>
    );
});

export default ProfilePage;
