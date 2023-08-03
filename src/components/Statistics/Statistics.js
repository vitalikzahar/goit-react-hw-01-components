import { Statcard, Statlist, Title, ListItem } from "./Statistics.styled";
export const Statistic = ({data,title}) => {
  return (<Statcard>
    <Title>{title}</Title>
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