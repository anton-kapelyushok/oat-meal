import React, { Component, PropTypes } from 'react';
import RecipeListItem from '../RecipeListItem';
import RecipeListDivider from '../RecipeListDivider';
import './index.css';

export default class RecipeList extends Component {

    render () {
        const meals = ['breakfast', 'lunch', 'dinner', 'snack'];
        const mealRecipes = {};
        meals.forEach(meal => {
            mealRecipes[meal] = [];
            this.props.recipes.forEach((recipe, index) => recipe.stage === meal && (mealRecipes[meal].push([recipe, ...this.props.replacements[index]])));
        });
        return (
            <ul className="recipe-list">
                {meals.map(meal => {
                    const result = [];
                    if (!mealRecipes[meal].length) {
                        return;
                    }
                    result.push(<RecipeListDivider name={meal}/>);
                    mealRecipes[meal].forEach(recipe => result.push(<RecipeListItem data={recipe} />));
                    return result;
                })}
            </ul>
        );
    }
}

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired,
    replacements: PropTypes.array,
};
