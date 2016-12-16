import React, { Component, PropTypes } from 'react';
import GoalSelector from '../GoalSelector';
import RecipeList from '../RecipeList';

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
            <div>
                <GoalSelector
                    onGoalChanged={this.handleGoalChange.bind(this)}
                    currentGoal={this.props.currentGoal}
                 />
                 <button onClick={this.props.onGoalSubmit}>Submit</button>
                 {this.props.loadingStatus === LoadingState.LOADED && recipePart}
                 {this.props.loadingStatus === LoadingState.LOADING && "loading"}
                 {this.props.loadingStatus === LoadingState.ERROR && "error"}
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
