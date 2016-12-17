import {
    CHANGE_CURRENT_GOAL,
    START_RECIPES_FETCHING,
    RECIPES_FETCHED,
    RECIPES_FETCHING_ERROR_OCCURED,
    RECIPE_SHOW_PRESSED,
    RECIPE_HIDE_PRESSED,
} from '../constants/action-types';

import {
    INITIAL,
    LOADING,
    LOADED,
    ERROR,
} from '../constants/loading-status';


const defaultGoal = {
    calories: 2000,
    carbs: 170,
    fat: 80,
    protein: 130,
};

const initialState = {
    recipes: [],
    replacements: [],
    currentGoal: { ...defaultGoal },
    showingGoal: { ...defaultGoal },
    summary: default,
    loadingStatus: INITIAL,
    showRecipe: false,
    showingRecipe: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_GOAL:
            return { ...state, currentGoal: action.goal };
        case START_RECIPES_FETCHING:
            return {
                ...state,
                showingGoal: state.currentGoal,
                loadingStatus: LOADING,
            };
        case RECIPES_FETCHED:
            if (action.goal !== state.showingGoal) {
                console.log('not equals');
                return state;
            }
            return {
                ...state,
                loadingStatus: LOADED,
                recipes: action.data.meals,
                replacements: action.data.replacement,
            };
        case RECIPES_FETCHING_ERROR_OCCURED:
            if (action.goal !== state.showingGoal) {
                return state;
            }
            return {
                ...state,
                loadingStatus: ERROR,
            };
        case RECIPE_SHOW_PRESSED:
            return {
                ...state,
                showRecipe: true,
                showingRecipe: action.recipe,
            };
        case RECIPE_HIDE_PRESSED:
            return {
                ...state,
                showRecipe: false,
            };
        default:
            return state;
    }
};

export default reducer;
