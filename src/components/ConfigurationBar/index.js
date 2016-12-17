import React, { Component, PropTypes } from 'react';
import './index.css';
import GoalSelector from '../GoalSelector/index.js';


export default class ConfigurationBar extends Component {
    render () {
        return (
            <div className="configuration-bar ">
                <div className = "sliders-bar item border-right">
                    <div className="Row">
                        <div className="Column current-target">
                            <div className="current-target-header">Current Target</div>
                            <br/>
                            <div className="goals-calories">{this.props.currentGoal.calories}</div>
                            <div className="calories-label">Calories</div>
                        </div>
                        <div className="Column">
                            <GoalSelector
                            onGoalChanged={this.props.onGoalChanged}
                            currentGoal={this.props.currentGoal}
                            />
                        </div>
                    </div>
                </div>


                <div className="meals-amount-bar item border-left">
                    <div className="Row">
                        <div className = "meals-amount">
                            <div className="Row meals-amount-text">
                                6
                            </div>
                            <div className="Row">
                                <div className="Column meal-part">
                                    <div className = "meal-selected"></div>
                                </div>
                                <div className="Column meal-part">
                                    <div className = "meal-selected"></div>
                                </div>
                                <div className="Column meal-part">
                                    <div className = "meal-selected"></div>
                                </div>
                                <div className="Column meal-part">
                                    <div className = "meal-selected"></div>
                                </div>
                                <div className="Column meal-part">
                                    <div className = "meal-selected"></div>
                                </div>
                                <div className="Column meal-part">
                                    <div className = "meal-selected"></div>
                                </div>
                                <div className="Column meal-part">
                                    <div className = "meal-empty"></div>
                                </div>
                                <div className="Column meal-part">
                                    <div className = "meal-empty"></div>
                                </div>
                            </div>
                        </div>
                        <div className="Column">
                            <div className="run-generation-button ">
                                <button onClick={this.props.onGoalSubmit} className="run-button">FIND FOOD</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}
ConfigurationBar.propTypes = {
    currentGoal: PropTypes.object,
    onGoalSubmit: PropTypes.func,
    onGoalChanged: PropTypes.func.isRequired
};