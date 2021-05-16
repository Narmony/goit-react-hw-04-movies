import { Link, withRouter } from 'react-router-dom';
import styles from './movieGallery.module.css';
import routes from '../../routes';

const MovieGallery = ({ movies, location }) => {
  // console.log(location.state);
  return (
    <>
      <ul className={styles.movieGallery}>
        {movies.map(({ id, title, backdrop_path, poster_path }) => (
          <li key={id} className={styles.movieItem}>
            <Link
              to={{
                pathname: `${routes.moviesPage}/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <p className={styles.title}> {title}</p>
              {backdrop_path ? (
                <img
                  className={styles.poster}
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  alt={title}
                />
              ) : (
                <img
                  width="100"
                  className={styles.poster}
                  src={` https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`}
                  alt={title}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withRouter(MovieGallery);
