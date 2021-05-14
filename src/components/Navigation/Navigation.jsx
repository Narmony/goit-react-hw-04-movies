import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <ul className="navigation-list">
      <li>
        <NavLink
          exact
          to={routes.home}
          className="navLink"
          activeClassName="navLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.moviesPage}
          className="navLink"
          activeClassName="navLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
export default Navigation;
