// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileStateSchema } from 'features/EditableProfile';
import { Country, Currency } from 'shared/consts/common';
import { Profile, ValidateProfileError } from 'features/EditableProfile/model/types/profile';
import { StateSchema } from 'app/providers/StoreProvider';


const meta: Meta<typeof EditableProfileCard> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

const mockData:Profile = {
    name: 'Someone',
    lastname: 'Some name',
    age: 20,
    currency: Currency.RUB,
    country: Country.GERMANY,
    city: 'Москва',
    username: 'john',
    avatar: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'
};

const mockState:ProfileStateSchema = {
    data: mockData,
    form: mockData,
    validateError: [],
    readonly: true,
    isLoading: false,
};

//👇 Throws a type error it the args don't match the component props
export const Default: Story = {
    args: {

    },
    // @ts-ignore
    decorators: [StoreDecorator({profile: mockState} as StateSchema)]
};

export const Errored: Story = {
    args: {

    },
    // @ts-ignore
    decorators: [StoreDecorator({profile: {...mockState, validateError: [ValidateProfileError.INCORRECT_USER_NAME, ValidateProfileError.INCORRECT_AGE]}} as StateSchema)]
};

export const Loading: Story = {
    args: {

    },
    // @ts-ignore
    decorators: [StoreDecorator({profile: {...mockState, isLoading: true}} as StateSchema)]
};


