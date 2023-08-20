import React, {FC} from 'react';
import {AddCommentFormProps} from './AddCommentForm';

export const LazyAddCommentForm = React.lazy<FC<AddCommentFormProps>>(
    () => import('./AddCommentForm')
);
// export const LazyAddCommentForm = React.lazy<FC<AddCommentFormProps>>(
//     () => new Promise(resolve => {
//         // @ts-ignore
//         setTimeout(() => resolve(import('./AddCommentForm')), 1500);
//     })
// );
