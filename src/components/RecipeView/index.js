import React, { Component, PropTypes } from 'react';
import './index.css';

export default class RecipeView extends Component {
    render () {
        const serving = this.props.data.serving;
        const goal = this.props.goal;
        const calories = this.props.data.recipe.calories * serving;
        const fat = this.props.data.recipe.fat * serving;
        const carbs = this.props.data.recipe.carbs * serving;
        const protein = this.props.data.recipe.protein * serving;


        const fatPercent = Math.floor(fat / goal.fat * 100);
        const carbsPercent = Math.floor(carbs / goal.carbs * 100);
        const proteinPercent = Math.floor(protein / goal.protein * 100);


        const doomLevel = this.props.doomed ? 0.6 : 0.3;

        return (
            <div className="recipe-view-overlay" onClick={(this.props.onRecipeHide)}>
                <div className="recipe-view-wrapper" style={{ backgroundImage: `url(${this.props.data.recipe.data.image})` }}>
                    <div onClick={(this.props.onRecipeHide)} className="recipe-view-wrapper-close">
                    <i className="icon material-icons">clear</i>
                    </div>
                    <div className="recipe-view-content">
                        <h1>{this.props.data.recipe.name}</h1>
                        <p>{serving} serving</p>
                        <ul className="recipe-view-shit">
                            <li>{Math.floor(calories)}<br/>calories</li>
                            <li>{Math.floor(fat)}g/{fatPercent}%<br/>fat</li>
                            <li>{Math.floor(carbs)}g/{carbsPercent}%<br/>carbs</li>
                            <li>{Math.floor(protein)}g/{proteinPercent}%<br/>protein</li>
                        </ul>
                        <h2>Ingredients</h2>
                        <ul className="recipe-view-ingredients">
                            {this.props.data.recipe.data.ingredients.map(i => <li>{i.text}</li>)}
                        </ul>
                        <a target="_blank" href={this.props.data.recipe.data.url}>Instructions</a>
                    </div>
                </div>

            </div>
        );
    }
}

RecipeView.propTypes = {
    data: PropTypes.object.isRequired,
    goal: PropTypes.object.isRequired,
    onRecipeHide: PropTypes.func,
};
