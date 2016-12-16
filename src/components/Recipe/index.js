import React, { Component, PropTypes } from 'react';
import './index.css';

export default class Recipe extends Component {
    render () {
        const backgroundStyle = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url("${this.props.data.recipe.data.image}")`;
        return (
            <div
                onClick={this.props.onClick}
                className="recipe"
                style={{
                    background: backgroundStyle,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
            >
                <div className="recipe-info">
                    <div className="recipe-title">
                    {this.props.data.recipe.name}
                    </div>
                    <ul className="recipe-details">
                        <li className="recipe-detail">
                            {Math.floor(this.props.data.recipe.calories * this.props.data.serving)} Kcal
                        </li>
                        <li className="recipe-detail">
                            <i className="icon icon material-icons">list</i>{this.props.data.recipe.data.ingredients.length} Ingredients
                        </li>
                        <li className="recipe-detail">
                            {this.props.data.serving} serving
                        </li>
                    </ul>
                </div>
                <div className="recipe-actions">
                    <a className="recipe-addtobookmark">Add to bookmark<i className="icon material-icons">bookmark</i></a>
                    <a className="recipe-learnmore">Learn more</a>
                </div>
            </div>
        );
    }
}

Recipe.propTypes = {
    data: PropTypes.object.isRequired,
    additional: PropTypes.object,
};
