import React, {FC} from 'react';
import {AddCommentFormProps} from './AddCommentForm';

// const LazyAboutPageComponent = React.lazy(
//     () => import('./AboutPage')
// )
export const LazyAddCommentForm = React.lazy<FC<AddCommentFormProps>>(
    () => new Promise(resolve => {
        // @ts-ignore
        setTimeout(() => resolve(import('./AddCommentForm')), 1500);
    })
);
