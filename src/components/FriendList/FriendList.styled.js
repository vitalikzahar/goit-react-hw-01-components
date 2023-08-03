import styled from 'styled-components';

export const Listfriends = styled.ul`

list-style: none;
width: 200px;
margin-top: 50px;
margin-left: auto;
margin-right: auto;
padding: 0;
`;
export const List = styled.li`
background-color: #C6BBFC;
border: 2px solid grey;
margin-bottom: 10px;
    display: flex;
    gap: 15px;`;   
export const Status = styled.span`
margin-top: auto;
margin-bottom: auto;
margin-left: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${props => {
    switch (props.mark){
        case 'true': return 'green';
        case 'false': return 'red';
        
        default: return 'yellow';
    }
}};`;
export const Photo = styled.img``;
export const Name = styled.p``;                      