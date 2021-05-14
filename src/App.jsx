import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';
import './styles.css';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-page" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Downloads...</h1>}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movieDetailPage} component={MovieDetailPage} />
        <Route path={routes.moviesPage} component={MoviesPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);
export default App;
