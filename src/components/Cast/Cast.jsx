import { Component } from 'react';
import { movieCredits } from '../../services/movieApi';
import styles from './cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await movieCredits(movieId);
    this.setState({ cast: response.cast });
  }

  render() {
    const actors = this.state.cast;
    return (
      <>
        {actors.length > 0 ? (
          <ul className={styles.listCard}>
            {actors.map(({ id, profile_path, name, character }) => (
              <li key={id} className={styles.itemCard}>
                {profile_path ? (
                  <img
                    className={styles.imgActor}
                    src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img
                    className={styles.imgActor}
                    src={` https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`}
                    alt={name}
                  />
                )}

                <h4> {name}</h4>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>NO INFORMATION AVAILABLE</h3>
        )}
      </>
    );
  }
}
export default Cast;
