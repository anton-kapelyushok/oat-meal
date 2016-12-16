import RationPage from '../components/RationPage';
import { connect } from 'react-redux';
import { submitNewGoal, changeCurrentGoal } from '../actions';


const mapStateToProps = state => ({
    currentGoal: state.ration.currentGoal,
    recipes: state.ration.recipes,
    replacements: state.ration.replacements,
    loadingStatus: state.ration.loadingStatus,
});

const mapDispatchToProps = dispatch => ({
    onGoalChanged: newGoal => dispatch(changeCurrentGoal(newGoal)),
    onGoalSubmit: () => dispatch(submitNewGoal()),
});

export const RationPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RationPage);

export default RationPageContainer;
