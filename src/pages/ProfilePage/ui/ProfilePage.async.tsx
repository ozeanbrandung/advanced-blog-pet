import React from 'react';

export const LazyProfilePageComponent = React.lazy(
    () => new Promise(resolve => {
        // @ts-ignore
        setTimeout(() => resolve(import('./ProfilePage')), 1500);
    })
);

//export default LazyMainPageComponent;
