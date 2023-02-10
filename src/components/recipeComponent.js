import styled from "styled-components";

const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
box-shadow:0 3px 10px 0 #aaa;
`;
const CoverImage = styled.img`
object-fit: cover;
height: 300px;  
`;

const RecipeName = styled.span`
font-size: 18px;
font-weight: bold;
color: black;
margin: 10px 0;
`;
const IngredientText = styled.span`
font-size: 18px;
border: solid 1px green;
color: black;
cursor: pointer;
padding: 10px 15px;
border-radius: 4px;
color: green;
text-align: center;
margin-bottom: 12px;
`;
const SeeMoreText = styled(IngredientText)`
color: #eb3300;
border: solid 1px #eb3300;
`;

export default {
    RecipeContainer,
    CoverImage,
    IngredientText,
    SeeMoreText,
    RecipeName,
}