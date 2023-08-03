import { Quizlist } from "./Quizlist/Quizlist";
import listItem from "../user.json"
import Statisticdata from "../data.json"
import Friendscsrd from "../friends.json"
import { Statistic } from "./Statistics/Statistics";
import { Friends } from "./FriendList/FriendList";
export const App = () => {
  return (
    <div>
      <Quizlist items={listItem} />
      <Statistic title={"UPLOAD STATS"} data={Statisticdata} />
      <Friends friends={Friendscsrd}/>
    </div>
  );
};
