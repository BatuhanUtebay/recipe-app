import React, {Component} from "react";
import "./RecipeList.css";
import PropTypes from 'prop-types';
import Recipe from "./Recipe";

class RecipeList extends Component{
    static propTypes ={
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        const recipes = this.props.recipes.map((r,id) => (
            <Recipe key={id} {...r} />
          ));
          
          return (
            <div className="recipe-list">
              {recipes}
            </div>
          )

    }
}

export default RecipeList