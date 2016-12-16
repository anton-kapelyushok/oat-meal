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
                <Carousel
                    slideIndex={this.state.i}
                    cellAlign="center"
                    slidesToShow={1.5}
                    decorators={[]}
                    slideWidth={"680px"}
                    draggin={false}
                >
                    {this.props.data.map((recipe, index) => <Recipe key={recipe.recipe.id} data={recipe}
                    onClick={this.handleClick.bind(this, index)}/>)}
                </Carousel>
            </li>
        );
    }
}

RecipeListItem.propTypes = {
    data: PropTypes.array.isRequired,
};
