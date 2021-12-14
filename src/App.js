import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ListRecipes from './components/List Recipes/ListRecipes';
import AddRecipes from './components/Add Recette/AddRecipes';
import Recipe from './components/Detail Recipe/Recipe';
import EditRecipe from './components/Edit Recipe/EditRecipe';

function App() {
  return (
    <div className="App">
       <BrowserRouter>

        <Switch>
          <Route path="/" component={() => <ListRecipes />} exact />
          <Route path="/addrecipe" component={() => <AddRecipes />} exact />
          <Route path="/recipe/:id" component={() => <Recipe />} />
          <Route path="/editrecipe/:id" component={() => <EditRecipe />} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
