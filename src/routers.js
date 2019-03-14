import React from 'react'
import HomePage from './pages/home/home';
import NotFoundPage from './pages/not-found/not-found';
import DesignPage from './pages/design/design';
import ExtendPage from './pages/extend/extendPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage></HomePage>
    },
    {
        path: '/design',
        exact: true,
        main: ({ history }) => <DesignPage history={history}></DesignPage>
    },
    {
        path: '/extend',
        exact: true,
        main: ({ history }) => <ExtendPage history={history}></ExtendPage>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage></NotFoundPage>
    }
]
export default routes;