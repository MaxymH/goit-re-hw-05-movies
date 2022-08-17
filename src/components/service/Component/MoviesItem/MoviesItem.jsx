import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './moviesItem.module.css';

function MoviesItem({ original_name, original_title, id, poster_path, from }) {
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Volodymyr_Zelensky_Official_portrait.jpg';
  const title = original_name || original_title;
  return (
    <li className={s.item} key={id}>
      <Link state={{ from }} to={`/movies/${id}`}>
        <img src={image} alt={title} className={s.image} />
        <p className={s.title}>{title}</p>
      </Link>
    </li>
  );
}

MoviesItem.propTypes = {
  original_name: PropTypes.string,
  original_title: PropTypes.string,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default MoviesItem;