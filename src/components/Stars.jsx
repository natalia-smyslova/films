import Star from "./Star";
import PropTypes from 'prop-types';

function Stars(props) {
  const { count } = props;

  // Если рейтинг меньше 1 или больше 5, или вообще не число, 
  // то компонент не должен иметь какого-либо представления в DOM.

  if (count < 1 && count > 5 && typeof count !== 'number') {
    throw new Error('Неверное количество звезд')
  }

  const arr = new Array(count).fill(undefined);
  //вернуть Star в количестве счетчика

  return (<ul className="card-body-stars u-clearfix">
     {arr.map((_, index) => <Star key={index} />)}
  </ul>)
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
}

export default Stars;