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
                            color = {it.color}
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
    visibleName: 'CALORIES',
    min: 0,
    max: 2500,
    color: '#fbc620'
}, {
    name: 'protein',
    visibleName: 'PROTS',
    min: 0,
    max: 400,
    color: '#fbc620'
}, {
    name: 'carbs',
    visibleName: 'CARBS',
    min: 0,
    max: 400,
    color: '#fbc620'
}, {
    name: 'fat',
    visibleName: 'FATS',
    min: 0,
    max: 250,
    color: '#fbc620'
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
