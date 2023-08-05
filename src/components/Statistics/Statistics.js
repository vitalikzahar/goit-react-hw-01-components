import PropTypes from 'prop-types';
import { Statcard, Statlist, Title, ListItem } from './Statistics.styled';
export const Statistic = ({ data, title }) => {
  return (
    <Statcard>
      {title.length > 0 && <Title>{title}</Title>}
      <Statlist>
        {data.map(item => (
          <ListItem key={item.id} percent={item.percentage}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </ListItem>
        ))}
      </Statlist>
    </Statcard>
  );
};

Statistic.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
