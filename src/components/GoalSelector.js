import React, { Component, PropTypes } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class GoalSelector extends Component {
    handleGoalChanged (name, value) {
        this.props.onGoalChanged &&
            this.props.onGoalChanged({ [name]: value });
    }
    render () {
        return (
            <ul>
                {this.props.goalProperties.map(it =>
                    <li key={it.name}>
                        {it.visibleName}
                        <Slider
                            min={it.min}
                            max={it.max}
                            value={this.props.currentGoal[it.name]}
                            onChange={this.handleGoalChanged.bind(this, it.name)}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

GoalSelector.propTypes = {
    goalProperties: PropTypes.array,
    currentGoal: PropTypes.object,
    onGoalChanged: PropTypes.func,
};

const defaultGoalProperties = [{
    name: 'calories',
    visibleName: 'calories',
    min: 0,
    max: 100,
}, {
    name: 'protein',
    visibleName: 'squirrels',
    min: 0,
    max: 200,
}, {
    name: 'carbs',
    visibleName: 'carbowhatever',
    min: 0,
    max: 50,
}, {
    name: 'fat',
    visibleName: 'fats',
    min: 0,
    max: 1000,
}];

const defaultCurrentGoal = {
    calories: 20,
    squirrels: 150,
    carbowhatever: 0,
    fats: 300,
};


GoalSelector.defaultProps = {
    goalProperties: defaultGoalProperties,
    currentGoal: defaultCurrentGoal,
};
