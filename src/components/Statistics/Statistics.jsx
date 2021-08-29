import PropTypes from 'prop-types';
import s from './Statistics.module.css';
// import getRandom from './randomcolor';

export default function Statistic({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statlist}>
        {stats.map(({id, label, percentage}) => (
          <li className={s.item} key={id} style={{ backgroundColor: randomColor() }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

function randomColor() {
  const color = Math.floor(Math.random() * 16777216).toString(16);
  return '#000000'.slice(0, -color.length) + color;
}
