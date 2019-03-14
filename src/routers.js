import React from 'react'
import HomePage from './pages/home/home';
import NotFoundPage from './pages/not-found/not-found';
import ProductListPage from './pages/products/product-list';
import ProductActionPage from './pages/products/product-action';
import CustomerListPage from './pages/customer/customer-list';
import DesignPage from './pages/design/design';
import ExtendPage from './pages/extend/extendPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage></HomePage>
    }, {
        path: '/products',
        exact: true,
        main: () => <ProductListPage></ProductListPage>
    },
    {
        path: '/products/add',
        exact: true,
        main: ({ history }) => <ProductActionPage history={history}></ProductActionPage>
    },
    {
        path: '/products/:id',
        exact: true,
        main: ({ match, history }) => <ProductActionPage match={match} history={history}></ProductActionPage>
    },
    {
        path: '/customers',
        exact: true,
        main: ({ history }) => <CustomerListPage history={history}></CustomerListPage>
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