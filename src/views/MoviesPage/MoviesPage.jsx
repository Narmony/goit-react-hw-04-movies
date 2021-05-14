import { Component } from 'react';

import Searchbar from '../../components/Searchbar';
import { movieSearchApi } from '../../services/movieApi';
import MovieGallery from '../../components/MovieGallery';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  onChangeQuery = query => {
    movieSearchApi(query).then(response => {
      this.setState({ movies: response.results });
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="searchPage">
        <Searchbar onSubmit={this.onChangeQuery} />
        <MovieGallery movies={movies} />
      </div>
    );
  }
}
export default MoviesPage;
