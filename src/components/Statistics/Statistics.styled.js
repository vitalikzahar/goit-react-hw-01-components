import styled from 'styled-components';

export const Statcard = styled.section`
  margin-top: 30px;
  width: 320px;
  height: 106px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ca2fff1a;
`;
export const Title = styled.h2`
  color: grey;
  text-align: center;
  padding: 10px 0 10px 0;
  margin: 0;
`;

export const Statlist = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  background-color: ${props => {
    switch (props.percent) {
      case 22:
        return 'green';
      case 4:
        return 'yellow';
      case 17:
        return 'red';
      case 47:
        return 'orange';
      case 10:
        return '#42FD08';
      default:
        return 'white';
    }
  }};

  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 10px 0;
`;
