import React, { FC } from 'react';
import { LoginFormProps } from './LoginForm';

//чтобы пропсы не терялись при использовании memo и lazy
export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(
    () => new Promise(resolve => {
        // @ts-ignore
        setTimeout(() => resolve(import('./LoginForm')), 1500);
    })
);
