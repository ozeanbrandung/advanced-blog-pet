import { Profile, ValidateProfileError } from 'features/EditableProfile/model/types/profile';

export const validateProfileData = (formData?: Profile) => {
    if (!formData) {
        return [ValidateProfileError.NO_DATA];
    }

    const {name, lastname, age, country} = formData;

    const errors: ValidateProfileError[] = [];

    if (!name || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_NAME);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
