import { StateSchema } from 'app/providers/StoreProvider';
import { initialForm } from '../../slice/profileSlice';
import { Country, Currency } from 'shared/consts/common';

//import { createSelector } from '@reduxjs/toolkit';

export const getProfileDataSelector = (state: StateSchema) => state.profile?.data;


export const getProfileFormSelector = (state: StateSchema) => state.profile?.form || initialForm;

//export const getProfileNameSelector = createSelector(getProfileDataSelector, data => data?.name || '');
export const getProfileNameSelector = (state: StateSchema) => state.profile?.form?.name || '';

//export const getProfileLastnameSelector = createSelector(getProfileDataSelector, data => data?.lastname || '');
export const getProfileLastnameSelector = (state: StateSchema) => state.profile?.form?.lastname || '';

export const getProfileAgeSelector = (state: StateSchema) => state.profile?.form?.age || '';

export const getProfileCitySelector = (state: StateSchema) => state.profile?.form?.city || '';

export const getProfileCountrySelector = (state: StateSchema):Country => state.profile?.form?.country || Country.RUSSIA;

export const getProfileAvatarSelector = (state: StateSchema) => state.profile?.form?.avatar || '';

//export const getProfileUsernameSelector = (state: StateSchema) => state.profile?.data?.username || '';
export const getProfileCurrencySelector = (state: StateSchema):Currency =>
    state.profile?.form?.currency || Currency.RUB;
