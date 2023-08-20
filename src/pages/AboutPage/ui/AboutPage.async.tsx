import React from 'react';

export const LazyAboutPageComponent = React.lazy(
    () => import('./AboutPage')
);
// export const LazyAboutPageComponent = React.lazy(
//     () => new Promise(resolve => {
//         // @ts-ignore
//         setTimeout(() => resolve(import('./AboutPage')), 1500);
//     })
// );

//export default LazyAboutPageComponent;
