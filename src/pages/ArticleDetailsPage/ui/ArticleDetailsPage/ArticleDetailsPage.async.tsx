import React from 'react';

// export const LazyArticleDetailsPageComponent = React.lazy(
//     () => new Promise(resolve => {
//         // @ts-ignore
//         setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
//     })
// );

export const LazyArticleDetailsPageComponent = React.lazy(
    () => import('./ArticleDetailsPage')
);

