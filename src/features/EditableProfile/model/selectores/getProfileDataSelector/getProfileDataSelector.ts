import { StateSchema } from 'app/providers/StoreProvider';

//import { createSelector } from '@reduxjs/toolkit';

export const getProfileDataSelector = (state: StateSchema) => state.profile?.data;

//export const getProfileNameSelector = createSelector(getProfileDataSelector, data => data?.name || '');
export const getProfileNameSelector = (state: StateSchema) => state.profile?.form?.name || '';

//export const getProfileLastnameSelector = createSelector(getProfileDataSelector, data => data?.lastname || '');
export const getProfileLastnameSelector = (state: StateSchema) => state.profile?.form?.lastname || '';

export const getProfileAgeSelector = (state: StateSchema) => state.profile?.form?.age || '';

export const getProfileCitySelector = (state: StateSchema) => state.profile?.form?.city || '';

export const getProfileCountrySelector = (state: StateSchema) => state.profile?.form?.country || '';

export const getProfileAvatarSelector = (state: StateSchema) => state.profile?.form?.avatar || '';

//export const getProfileUsernameSelector = (state: StateSchema) => state.profile?.data?.username || '';
