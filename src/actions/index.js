
import { RATION_ENDPOINT } from '../constants/api';
import {
    CHANGE_CURRENT_GOAL,
    START_RECIPES_FETCHING,
    RECIPES_FETCHED,
    RECIPES_FETCHING_ERROR_OCCURED,
    RECIPE_SHOW_PRESSED,
    RECIPE_HIDE_PRESSED,
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
    fetch(RATION_ENDPOINT + `?calories=${goal.calories}&carbs=${goal.carbs}&fat=${goal.fat}&protein=${goal.protein}`)
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


export const showRecipe = recipe => ({
    type: RECIPE_SHOW_PRESSED,
    recipe,
});

export const hideRecipe = () => ({
    type: RECIPE_HIDE_PRESSED,
});
