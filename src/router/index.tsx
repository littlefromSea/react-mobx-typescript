import * as React from 'react'
import { Route, Switch, RouteProps } from 'react-router-dom';
import LoadingHomePage from '../components/Loading/loading';

const {lazy, Suspense} = React

const Details = lazy(() => import( /* webpackChunkName:"home" */'../container/Details/details'));
const Home = lazy(() => import( /* webpackChunkName:"home" */'../container/Home/home'));

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/details',
    exact: true,
    component: Details
  }
]

const Routes = () => <Suspense fallback={<LoadingHomePage />}>
  <Switch>
  {
    routes.map((r, index) => {
      const {path, exact, component} = r
      return <Route key={index} path={path} exact={exact} component={component} />
    })
  }
  </Switch>
</Suspense>

export default Routes;