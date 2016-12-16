import React, { Component, PropTypes } from 'react';
import './index.css';

export default class RecipeListDivider extends Component {
    render () {
        return (<li className="recipe-list-divider">{this.props.name}</li>);
    }
}


RecipeListDivider.propTypes = {
    name: PropTypes.string.isRequired,
};
