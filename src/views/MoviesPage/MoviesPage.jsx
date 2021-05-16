import { Component } from 'react';

import Searchbar from '../../components/Searchbar';
import { movieSearchApi } from '../../services/movieApi';
import MovieGallery from '../../components/MovieGallery';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };
  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      location.search = location.search.replace(/^\?+/, '');
      this.setState({ query: location.search });
    }
  }
  onChangeQuery = query => {
    this.setState({
      query: query,
      movies: [],
    });

    // movieSearchApi(query).then(response => {
    //   this.setState({ movies: response.results });
    // });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.searchQuery !== query) {
      this.fetchMovie();
    }
    const { location } = this.props;
    location.search = query;
  }
  async fetchMovie() {
    const { query } = this.state;
    movieSearchApi(query).then(response => {
      this.setState({ movies: response.results });
    });
  }
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
