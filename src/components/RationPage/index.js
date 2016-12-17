import React, { Component, PropTypes } from 'react';
import RecipeList from '../RecipeList';
import Header from '../Header';
import NutrionChart from '../NutrionChart';
import ConfigurationBar from '../ConfigurationBar';

import * as LoadingState from '../../constants/loading-status';

import './index.css';
export default class RationPage extends Component {
    handleGoalChange (update) {
        const newGoal = { ...this.props.currentGoal, ...update };
        this.props.onGoalChanged && this.props.onGoalChanged(newGoal);
    }
    render () {
        const recipePart = (
                        <div className="recipes-wrapper">
                            {this.props.recipes &&
                                <RecipeList
                                    recipes={this.props.recipes}
                                    replacements={this.props.replacements}
                                />}
                         </div>);
        return (
            <div className="pageWrapper">
                <Header selectedTabNumber={1}/>
                <ConfigurationBar currentGoal={this.props.currentGoal}
                                  onGoalChanged = {this.handleGoalChange.bind(this)}
                                  onGoalSubmit = {this.props.onGoalSubmit}/>
                <NutrionChart data={this.props.currentGoal}/>
                <div>
                    {Math.round(this.props.recipes.map(recipe => recipe.recipe.calories * recipe.serving).reduce((el, r) => el + r, 0))}
                    <br/>
                    {Math.round(this.props.recipes.map(recipe => recipe.recipe.carbs * recipe.serving).reduce((el, r) => el + r, 0))}
                    <br/>
                    {Math.round(this.props.recipes.map(recipe => recipe.recipe.protein * recipe.serving).reduce((el, r) => el + r, 0))}
                    <br/>
                    {Math.round(this.props.recipes.map(recipe => recipe.recipe.fat * recipe.serving).reduce((el, r) => el + r, 0))}
                    <br/>
                </div>
                <div>
                     {this.props.loadingStatus === LoadingState.LOADED && recipePart}
                     {this.props.loadingStatus === LoadingState.LOADING && "loading"}
                     {this.props.loadingStatus === LoadingState.ERROR && "error"}
                </div>
            </div>
        );
    }
}

RationPage.propTypes = {
    recipes: PropTypes.array,
    replacements: PropTypes.array,
    currentGoal: PropTypes.object,
    loadingStatus: PropTypes.string.isRequired,
    onGoalSubmit: PropTypes.func,
    onGoalChanged: PropTypes.func.isRequired,
};
