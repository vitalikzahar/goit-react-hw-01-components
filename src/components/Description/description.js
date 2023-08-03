import { List, Img, Name, Text } from "./description.styled";
export const Description = props => {
  return (<List>
    <Img
      src={props.items.avatar}
      alt="User avatar"
      class="avatar"
    />
    <Name>{props.items.username}</Name>
    <Text>@{props.items.tag}</Text>
    <Text>{props.items.location}</Text>
  </List>);
}