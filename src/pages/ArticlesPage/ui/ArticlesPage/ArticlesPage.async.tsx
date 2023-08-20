import React from 'react';

// export const LazyArticlesPageComponent = React.lazy(
//     () => new Promise(resolve => {
//         // @ts-ignore
//         setTimeout(() => resolve(import('./ArticlesPage')), 500);
//     })
// );

export const LazyArticlesPageComponent = React.lazy(
    () => import('./ArticlesPage')
);

//export default LazyMainPageComponent;
