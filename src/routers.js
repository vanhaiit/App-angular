import React from 'react'
import FabricPage from './pages/fabric/fabric';
import ConfigPage from './pages/config/config';
import ExtraPage from './pages/extra/extra';
import NotFoundPage from './pages/not-found/not-found';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <FabricPage></FabricPage>
    },
    {
        path: '/fabric',
        exact: true,
        main: () => <FabricPage></FabricPage>
    },
    {
        path: '/config',
        exact: true,
        main: ({ history }) => <ConfigPage history={history}></ConfigPage>
    },
    {
        path: '/extra',
        exact: true,
        main: ({ history }) => <ExtraPage history={history}></ExtraPage>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage></NotFoundPage>
    }
]
export default routes;