import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';


import MoviesItem from '../MoviesItem';

import s from './moviesList.module.css';

function MoviesList({ items }) {
  const location = useLocation();

  const elements = items.map(item => <MoviesItem key={item.id} {...item} from={ location}/>);

  return <ul className={s.list}>{elements}</ul>;
}
MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      original_name: PropTypes.string,
      original_title: PropTypes.string,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;