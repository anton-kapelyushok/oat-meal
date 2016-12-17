import React, { Component, PropTypes } from 'react';
import './index.css';
import GoalSelector from '../GoalSelector';


export default class ConfigurationBar extends Component {
    render () {
        return (
            <div className="configuration-bar ">
                <div className = "sliders-bar item border">
                    <span className = "sliders-bar-label">
                        <div>Current Target</div>
                        <div>{this.props.currentGoal.calories}</div>
                        <div>Calories</div>
                    </span>
                    <GoalSelector
                        onGoalChanged={this.props.onGoalChanged}
                        currentGoal={this.props.currentGoal}
                        />
                </div>


                <div className="meals-amount-bar item border"></div>
                <div className="run-generation-button item">

                    <div className="round-button"><div className="round-button-circle"><a onClick={this.props.onGoalSubmit} className="round-button">Submit</a></div></div>
                </div>
            </div>
        );
    }

}