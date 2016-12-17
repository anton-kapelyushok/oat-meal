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
            this.props.recipes.forEach(
                (recipe, index) => recipe.stage === meal && (mealRecipes[meal].push({ index, recipe }))
            );
        });
        return (
            <ul className="recipe-list">
                {meals.map(meal => {
                    const result = [];
                    if (!mealRecipes[meal].length) {
                        return;
                    }
                    result.push(<RecipeListDivider name={meal} />);
                    mealRecipes[meal].forEach(
                        (obj) => result.push(
                            <RecipeListItem
                                data={obj.recipe}
                                onShowRecipe={this.props.onShowRecipe}
                                onShuffle={() => this.props.onShuffle && this.props.onShuffle(obj.index)}
                            />
                        )
                    );
                    return result;
                })}
            </ul>
        );
    }
}


RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired,
    onShowRecipe: PropTypes.func,
    onShuffle: PropTypes.func,
};
