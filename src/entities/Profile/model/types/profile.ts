import { Country, Currency } from 'shared/consts/common';

export interface Profile {
    name: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileStateSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string | null;
    readonly: boolean;
}
