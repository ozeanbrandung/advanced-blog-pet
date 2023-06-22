import { profileActions } from '../model/slice/profileSlice';
import { Profile } from '../model/types/profile';
import {
    getProfileAgeSelector,
    getProfileAvatarSelector,
    getProfileCitySelector,
    getProfileCountrySelector,
    getProfileCurrencySelector,
    getProfileLastnameSelector,
    getProfileNameSelector
} from './selectores/getProfileDataSelector/getProfileDataSelector';
import { InputsListConfigType, InputTypes } from 'shared/hooks/useInputWithData/useInputWithData';
import { Country, Currency } from 'shared/consts/common';

export const inputsListConfig:InputsListConfigType<DeepPartial<Profile>> = {
    name: {
        selector: getProfileNameSelector,
        action: profileActions.updateProfile,
        payloadCreator: (value) => ({name: value}),
        type: InputTypes.INPUT
    },
    lastname: {
        selector: getProfileLastnameSelector,
        action: profileActions.updateProfile,
        payloadCreator: (value) => ({lastname: value}),
        type: InputTypes.INPUT
    },
    age: {
        selector: getProfileAgeSelector,
        action: profileActions.updateProfile,
        payloadCreator: (value) => ({age: Number(value)}),
        type: InputTypes.INPUT
    },
    country: {
        selector: getProfileCountrySelector,
        action: profileActions.updateProfile,
        payloadCreator: (value:Country) => ({country: value}),
        type: InputTypes.SELECTOR,
        config: {
            options: Object.entries(Country).map(([val, key]) => ({label: key, value: val}))
        }
    },
    city: {
        selector: getProfileCitySelector,
        action: profileActions.updateProfile,
        payloadCreator: (value) => ({city: value}),
        type: InputTypes.INPUT,
    },
    avatar: {
        selector: getProfileAvatarSelector,
        action: profileActions.updateProfile,
        payloadCreator: (value) => ({avatar: value}),
        type: InputTypes.INPUT
    },
    currency: {
        selector: getProfileCurrencySelector,
        action: profileActions.updateProfile,
        payloadCreator: (value:Currency) => ({currency: value}),
        type: InputTypes.SELECTOR,
        config: {
            options: Object.entries(Currency).map(([val, key]) => ({label: key, value: val}))
        }
    }
};
