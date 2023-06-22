import { Country, Currency } from 'shared/consts/common';

export enum ValidateProfileError {
    INCORRECT_USER_NAME = 'INCORRECT_USER_NAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    name: string | undefined;
    lastname: string | undefined;
    age: number | undefined;
    currency: Currency | undefined;
    country: Country | undefined;
    city: string | undefined;
    username: string | undefined;
    avatar: string | undefined;
}

export interface ProfileStateSchema {
    data?: Profile;
    form: Profile;
    isLoading: boolean;
    //error?: string | null;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
