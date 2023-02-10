import React, { useState } from 'react'
import  styled  from 'styled-components'
import  Axios  from 'axios';
import Dialog  from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions  from '@mui/material/DialogActions';
import  Header from './components/headerComponent';
import Recipe from './components/recipeComponent'


const APP_ID = "3afb4cfe";
const APP_KEY = "f4ae9da2d0b6f31550a84aa2e1af04d3";

const Container = styled.div`
display: flex;
flex-direction: column;
`;
const RecipeListContainer = styled.div`
display:flex;
flex-direction: row;
gap: 20px;
flex-wrap:wrap;
justify-content: space-evenly;
`;
const Placeholder=styled.img`
width: 100%;
height: 100vh;
opacity:90%;
`;

const RecipeComponent = (props) =>{
  const [show, setShow] = React.useState(false);
  const {recipeObj} = props;
  return(
    <>
    <Dialog open={show}>
      <DialogTitle id='alert-dialog-slide-title'>Ingredient</DialogTitle>
      <DialogContent>
        <table>
          <thead>
            <th>Ingredients</th>
            <th>Weight</th>
          </thead>
          <tbody>
            {recipeObj.ingredients.map((ingredientObj) =>(
              <tr>
                <td>{ingredientObj.text}</td>
                <tr>{ingredientObj.weight}</tr>
              </tr>
            ))}
          </tbody>
        </table>
      </DialogContent>
      <DialogActions>
        <Recipe.IngredientText onClick={() => window.open(recipeObj.url)}>See More</Recipe.IngredientText>
        <Recipe.SeeMoreText onClick={() => setShow("")}>Close</Recipe.SeeMoreText>
      </DialogActions>
    </Dialog>
    <Recipe.RecipeContainer>
        <Recipe.CoverImage src={recipeObj.image}/>
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientText onClick={() => setShow(true)}>
        Ingredient
        </Recipe.IngredientText>
        <Recipe.SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe</Recipe.SeeMoreText>
      </Recipe.RecipeContainer>
      </>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

const fetchRecipe = async(searchString) =>{
 const response =await Axios.get(
    `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
  );

  console.log(response);
  updateRecipeList(response.data.hits);
};

  const onTextChange =(event)=>{
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header.Container>
        <Header.AppNameComponent>
        <Header.AppIcon src ="hamburger.png" />
        Recipe Finder
        </Header.AppNameComponent>
      <Header.SerchComponent>
        <Header.SearchIcon src="/search-icon.png" />
       <Header.SearchInput
        placeholder='Serach Recipe' 
        onChange={onTextChange} 
        />
      </Header.SerchComponent>
        </Header.Container>
      <RecipeListContainer>
      {recipeList.length ? 
      recipeList.map((recipeObj) =>(
        <RecipeComponent recipeObj={recipeObj.recipe} />
      )): (
        <Placeholder src="img.jpg" />
      )}
      
      </RecipeListContainer>
      </Container>
      
  )
}

export default App;