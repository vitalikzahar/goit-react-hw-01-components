import { List, Item } from "./stats.styled";

export const Stats = props => {
  
  const stats = props.items.stats;
  return (<List>
    <Item>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </Item>
    <Item>
      <span>Views</span>
      <span>{stats.views}</span>
    </Item>
    <Item>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </Item>
  </List>);
}