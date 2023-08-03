import { Listfriends, List, Status, Photo, Name} from "./FriendList.styled";
export const Friends = ({ friends }) => {
    
    return (
        <Listfriends>
            {friends.map(friend => (
                <List key={friend.id}>
                    <Status mark={friend.isOnline.toString()}></Status>
                    <Photo src={friend.avatar} alt="User avatar" width="48" />
                    <Name>{friend.name}</Name>
                </List>
            ))

            }
        </Listfriends>
    );
}