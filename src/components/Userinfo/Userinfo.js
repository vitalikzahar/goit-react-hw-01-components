import { Description } from 'components/Description/description';
import { Stats } from 'components/Stats/stats';
import { Card } from './Userinfo.styled';
export const Userinfo = ({ items }) => {
  return (
    <Card>
      <Description items={items} />
      <Stats items={items} />
    </Card>
  );
};
