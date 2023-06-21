import { profileActions } from '../model/slice/profileSlice';
import { Profile } from '../model/types/profile';
import {
    getProfileAgeSelector,
    getProfileLastnameSelector,
    getProfileNameSelector
} from './selectores/getProfileDataSelector/getProfileDataSelector';
import { InputsListConfigType } from 'shared/hooks/useInputWithData/useInputWithData';

export const inputsListConfig:InputsListConfigType<Profile> = {
    name: {
        selector: getProfileNameSelector,
        action: profileActions.updateProfile,
        payloadCreator: (value) => ({name: value}),
    },
    lastname: {
        selector: getProfileLastnameSelector,
        action: profileActions.updateProfile,
        payloadCreator: (value) => ({lastname: value}),
    },
    age: {
        selector: getProfileAgeSelector,
        action: profileActions.updateProfile,
        payloadCreator: (value) => ({age: Number(value)}),
    }
};
