import { Component } from 'react';
import { moviePopApi } from '../../services/movieApi';

import MovieGallery from '../../components/MovieGallery';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await moviePopApi().then(resp => resp.results);
    this.setState({ movies: response });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending Today</h1>
        <MovieGallery movies={movies} />
      </>
    );
  }
}
export default HomePage;
