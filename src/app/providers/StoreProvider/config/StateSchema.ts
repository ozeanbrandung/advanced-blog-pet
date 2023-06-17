import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AuthFormSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    authForm: AuthFormSchema;
}
