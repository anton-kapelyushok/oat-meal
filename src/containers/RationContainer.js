import RationPage from '../components/RationPage';
import { connect } from 'react-redux';
import {
    submitNewGoal,
    changeCurrentGoal,
    showRecipe,
    hideRecipe,
    shuffle,
} from '../actions';


const mapStateToProps = state => ({
    currentGoal: state.ration.currentGoal,
    recipes: state.ration.all.map((choices, i) => choices[state.ration.selectedIndices[i]]),
    loadingStatus: state.ration.loadingStatus,
    showRecipe: state.ration.showRecipe,
    recipeToShow: state.ration.showingRecipe
});

const mapDispatchToProps = dispatch => ({
    onGoalChanged: newGoal => dispatch(changeCurrentGoal(newGoal)),
    onGoalSubmit: () => dispatch(submitNewGoal()),
    onShowRecipe: recipe => dispatch(showRecipe(recipe)),
    onRecipeHide: () => dispatch(hideRecipe()),
    onShuffle: index => dispatch(shuffle(index)),
});

export const RationPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RationPage);

export default RationPageContainer;
