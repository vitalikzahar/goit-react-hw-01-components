import { Userinfo } from './Userinfo/Userinfo';
import listItem from '../user.json';
import Statisticdata from '../data.json';
import Friendscard from '../friends.json';
import Transactionlist from '../transactions.json';
import { Statistic } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div>
      <Userinfo items={listItem} />
      <Statistic title={'UPLOAD STATS'} data={Statisticdata} />
      <FriendList friends={Friendscard} />
      <TransactionHistory lists={Transactionlist} />
    </div>
  );
};
