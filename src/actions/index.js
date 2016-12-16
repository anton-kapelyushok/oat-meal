
import { RATION_ENDPOINT } from '../constants/api';
import {
    CHANGE_CURRENT_GOAL,
    START_RECIPES_FETCHING,
    RECIPES_FETCHED,
    RECIPES_FETCHING_ERROR_OCCURED,
 } from '../constants/action-types';
import * as LoadingStatus from '../constants/loading-status';
export const changeCurrentGoal = (newGoal) => ({
    type: CHANGE_CURRENT_GOAL,
    goal: newGoal,
});

export const submitNewGoal = () => (dispatch, getState) => {
    const goal = getState().ration.currentGoal;
    const showingGoal = getState().ration.showingGoal;
    const loadingStatus = getState().ration.loadingStatus;
    if (loadingStatus !== LoadingStatus.INITIAL && goal === showingGoal) {
        return;
    }
    dispatch({ type: START_RECIPES_FETCHING });
    fetch(RATION_ENDPOINT, {
        qs: goal,
    })
        // Promise.resolve(require('./recipes.js'))
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        console.log(response);
        return response.json();
    })
    .then(data => dispatch({ type: RECIPES_FETCHED, goal, data }))
    .catch(error => dispatch({ type: RECIPES_FETCHING_ERROR_OCCURED, goal, error }));
};
