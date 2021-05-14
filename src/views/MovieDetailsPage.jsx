import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import routes from '../routes';
import '../../src/styles.css';
// import axios from 'axios';

import { movieDetail } from '../services/movieApi';
// import { BASE_URL, API_KEY } from '../links';

class MovieDetailPage extends Component {
  state = {
    genres: '',
    overview: '',
    poster_path: '',
    title: '',
    vote_average: '',
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    // const response = await movieDetail(movieId);
    // console.log(movieId);
    // this.setState({ movie: response });
    // console.log(this.state.movie);

    try {
      await movieDetail(movieId).then(
        ({
          title,
          poster_path,
          release_date,
          vote_average,
          overview,
          genres,
        }) => {
          if (genres) {
            genres = genres.map(genre => genre.name).join(', ');
          }
          if (poster_path) {
            poster_path = `https://image.tmdb.org/t/p/w300/${poster_path}`;
          }
          this.setState({
            title,
            poster_path,
            release_date,
            vote_average,
            overview,
            genres,
          });
        },
      );
    } catch (err) {
      throw err;
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const { title, poster_path, release_date, vote_average, overview, genres } =
      this.state;
    const year = new Date(release_date).getFullYear();
    const vote = vote_average * 10;
    const { match } = this.props;

    return (
      <>
        <button type="button" className="backBtn" onClick={this.handleGoBack}>
          {' '}
          back
        </button>
        <div className="movieDetails">
          <img src={poster_path} alt={title} />
          <div className="movieDescr">
            <h2>
              {title} / {year}
            </h2>
            <p>User Score: {vote} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <div>{genres}</div>
          </div>
        </div>
        <h2 className="extraInfo">Additional information</h2>
        <ul>
          <li>
            <NavLink exact to={`${match.url}/cast`}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <Route exact path={`${match.path}/cast`} component={Cast} />
        <Route exact path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}
export default MovieDetailPage;
