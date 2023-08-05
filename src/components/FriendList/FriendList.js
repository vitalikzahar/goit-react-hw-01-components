import { FriendsCard } from 'components/FriendsCard/FriendsCard';
import { Listfriends } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <Listfriends>
      {friends.map(friend => (
        <FriendsCard friend={friend} />
      ))}
    </Listfriends>
  );
};
