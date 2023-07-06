import React from 'react';

export const LazyArticlesPageComponent = React.lazy(
    () => new Promise(resolve => {
        // @ts-ignore
        setTimeout(() => resolve(import('./ArticlesPage')), 1500);
    })
);

//export default LazyMainPageComponent;
