import React, { Component, PropTypes } from 'react';
import GoalSelector from '../GoalSelector';

export default class RationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGoal: {
                calories: 20,
                squirrels: 150,
                carbowhatever: 0,
                fats: 300,
            },
        };
    }
    handleGoalChange(update) {
        const newGoal = { ...this.state.currentGoal, ...update };
        this.setState({ currentGoal: newGoal });
    }
    render() {
        return (
            <div>
                <GoalSelector
                    onGoalChanged={this.handleGoalChange.bind(this)}
                    currentGoal={this.state.currentGoal}
                 />
                 <button onClick={this.props.onGoalSubmit}>Submit</button>
            </div>
        );
    }
}

RationPage.propTypes = {
    recipes: PropTypes.array,
    target: PropTypes.object,
    onGoalSubmit: PropTypes.func,
};
