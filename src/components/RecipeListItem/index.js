import React, { Component, PropTypes } from 'react';
import Recipe from '../Recipe';
import Carousel from 'nuka-carousel';

import './index.css';

export default class RecipeListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            i: 0,
        };
    }

    handleClick (i) {
        console.log('handleClick()', i);
        this.setState({ i });
    }

    render () {
        console.log(this.props.data);
        const length = this.props.data.length;
        return (
            <li className="recipe-list-item">
                <Recipe
                    onRecipeShow={
                        () => this.props.onShowRecipe &&
                                this.props.onShowRecipe(this.props.data)
                    }
                    onRecipeNext={this.props.onShuffle}
                    data={this.props.data}
                    />
            </li>
        );
    }
}

RecipeListItem.propTypes = {
    data: PropTypes.object.isRequired,
    onShowRecipe: PropTypes.func,
    onShuffle: PropTypes.func,
};
