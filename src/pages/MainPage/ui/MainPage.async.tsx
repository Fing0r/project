import {lazy} from "react";

const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1000)
}) )

export {MainPageAsync}

