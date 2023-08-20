import React from 'react';

export const LazyProfilePageComponent = React.lazy(
    () => import('./ProfilePage')
);

//export default LazyMainPageComponent;
