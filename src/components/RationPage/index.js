import React, { Component, PropTypes } from 'react';
import RecipeList from '../RecipeList';
import Header from '../Header';
import NutrionChart from '../NutrionChart';
import ConfigurationBar from '../ConfigurationBar';
import RecipeView from '../RecipeView';

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
                                    onShowRecipe={this.props.onShowRecipe}
                                    onShuffle={this.props.onShuffle}
                                />}
                         </div>);
        return (
            <div className="pageWrapper">
                <Header selectedTabNumber={1}/>
                {this.props.showRecipe && <RecipeView
                    onRecipeHide={this.props.onRecipeHide}
                    goal={this.props.currentGoal}
                    data={this.props.recipeToShow}
                />}
                <div className="content">
                <ConfigurationBar currentGoal={this.props.currentGoal}
                                  onGoalChanged = {this.handleGoalChange.bind(this)}
                                  onGoalSubmit = {this.props.onGoalSubmit}/>
                <NutrionChart data={this.props.currentGoal}/>
                <div>
                    {JSON.stringify(this.props.summary)}
                </div>
                <div>
                     {this.props.loadingStatus === LoadingState.LOADED && recipePart}
                     {this.props.loadingStatus === LoadingState.LOADING && "loading"}
                     {this.props.loadingStatus === LoadingState.ERROR && "error"}
                </div>
                </div>
            </div>
        );
    }
}

RationPage.propTypes = {
    recipes: PropTypes.array,
    currentGoal: PropTypes.object,
    loadingStatus: PropTypes.string.isRequired,
    showRecipe: PropTypes.bool.isRequired,
    recipeToShow: PropTypes.object.isRequired,
    onGoalSubmit: PropTypes.func,
    onGoalChanged: PropTypes.func.isRequired,
    onRecipeHide: PropTypes.func,
    onShowRecipe: PropTypes.func,
    onShuffle: PropTypes.func,
};
