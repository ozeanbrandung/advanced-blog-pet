import React from "react";

const LazyMainPageComponent = React.lazy(
    () => new Promise(resolve => {
        // @ts-ignore
        setTimeout(() => resolve(import('./MainPage')), 1500)
    })
)

export default LazyMainPageComponent;
