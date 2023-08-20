import React from 'react';

// export const LazyMainPageComponent = React.lazy(
//     () => new Promise(resolve => {
//         // @ts-ignore
//         setTimeout(() => resolve(import('./MainPage')), 1500);
//     })
// );

export const LazyMainPageComponent = React.lazy(
    () => import('./MainPage')
);
