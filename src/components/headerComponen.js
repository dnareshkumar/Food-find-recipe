import styled from "styled-components";

const Container = styled.div`
color: white;
background-color: black;
display: flex;
flex-direction: row;
align-item: center;
justify-content: space-between;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px #555;
`;
const AppNameComponent = styled.div`
display: flex;
align-items: center;
`;
const AppIcon = styled.img`
height: 36px;
width: 36px;
margin: 15px;
`;
const SerchComponent = styled.div`
height: 36px;
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 50%;
`;
const SearchIcon = styled.img`
height: 32px;
width: 32px;
`;

 const SearchInput = styled.input`
border: none;
outline: none;
margin-left: 15px;
font-size: 16px;
font-weight: bold;
`;

export default {
    Container,
    AppNameComponent,
    AppIcon,
    SerchComponent,
    SearchIcon,
    SearchInput,
};
