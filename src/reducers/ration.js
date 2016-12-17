import {
    CHANGE_CURRENT_GOAL,
    START_RECIPES_FETCHING,
    RECIPES_FETCHED,
    RECIPES_FETCHING_ERROR_OCCURED,
    RECIPE_SHOW_PRESSED,
    RECIPE_HIDE_PRESSED,
    SHUFFLE_RECIPE,
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
    all: [],
    currentGoal: { ...defaultGoal },
    showingGoal: { ...defaultGoal },
    summary: { calories: 0, carbs: 0, fat: 0, protein: 0 },
    loadingStatus: INITIAL,
    showRecipe: false,
    showingRecipe: null,
    selectedIndices: [],
};

const mergeRecipesAndReplacements = (recipes, replacements) => {
    const all = [];
    for (let i = 0; i < recipes.length; i++) {
        all.push([recipes[i], ...replacements[i]]);
    }
    return all;
};

const calculateSummary = (meals, replacements, selectedIndices) => {
    const all = [];

    const selected = [];
    for (let i = 0; i < all.length; i++) {
        selected.push(all[i][selectedIndices[i]]);
    }
    const summary = {
        calories: 0,
        carbs: 0,
        fat: 0,
        protein: 0,
    };
    console.log(selected);
    selected.forEach(recipe => {
        summary.calories += recipe.recipe.calories;
        summary.carbs += recipe.recipe.carbs;
        summary.fat += recipe.recipe.fat;
        summary.protein += recipe.recipe.protein;
    });

    return summary;
};

export const reducer = (state = initialState, action) => {
    let selectedIndices;
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
            selectedIndices = [];
            for (let i = 0; i < action.data.meals.length; i++) {
                selectedIndices.push(0);
            }
            const all = mergeRecipesAndReplacements(action.data.meals, action.data.replacement);
            return {
                ...state,
                loadingStatus: LOADED,
                all,
                selectedIndices,
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
        case SHUFFLE_RECIPE:
            selectedIndices = [...state.selectedIndices];
            const length = state.all[action.index].length;
            selectedIndices[action.index] += 1;
            selectedIndices[action.index] %= length;
            return {
                ...state,
                selectedIndices,
            };
        default:
            return state;
    }
};

export default reducer;
