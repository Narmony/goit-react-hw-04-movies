import { Component } from 'react';

import { movieReviews } from '../../services/movieApi';

class Reviews extends Component {
  state = {
    review: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await movieReviews(movieId);
    this.setState({ review: response.results });
  }

  render() {
    const reviewInfo = this.state.review;
    return reviewInfo.length > 0 ? (
      <>
        <h1>Reviews</h1>
        <ul>
          {reviewInfo.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <h4>NO ANY REVIEW YET</h4>
    );
  }
}
export default Reviews;
