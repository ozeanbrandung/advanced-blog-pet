import { profileActions } from '../model/slice/profileSlice';
import { Profile } from '../model/types/profile';
import {
    getProfileAgeSelector,
    getProfileLastnameSelector,
    getProfileNameSelector
} from './selectores/getProfileDataSelector/getProfileDataSelector';
import { InputsListConfigType } from 'shared/hooks/useInputWithData/useInputWithData';

export const inputsListConfig:InputsListConfigType<Profile> = {
    username: {
        selector: getProfileNameSelector,
        action: profileActions.setNameInputValue
    },
    lastname: {
        selector: getProfileLastnameSelector,
        action: profileActions.setLastnameInputValue,
    },
    age: {
        selector: getProfileAgeSelector,
        action: profileActions.setAgeInputValue
    }
};
