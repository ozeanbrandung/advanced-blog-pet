import { Country, Currency } from 'shared/consts/common';

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
    error?: string | null;
    readonly: boolean;
}
