import React, { Component, PropTypes } from 'react';
import 'rc-slider/assets/index.css';
import './index.css';
import { PieChart } from 'react-d3';


export default class NutrionBarChart extends Component {
    render () {

        let calories = Math.round(this.props.data.map(recipe => recipe.recipe.calories * recipe.serving).reduce((el, r) => el + r, 0));
        const carbs =  Math.round(this.props.data.map(recipe => recipe.recipe.carbs * recipe.serving).reduce((el, r) => el + r, 0));
        const protein =  Math.round(this.props.data.map(recipe => recipe.recipe.protein * recipe.serving).reduce((el, r) => el + r, 0));
        const fat = Math.round(this.props.data.map(recipe => recipe.recipe.fat * recipe.serving).reduce((el, r) => el + r, 0));
        const pieData = [];
        pieData.push({
            label: 'Carbs',
            value: Math.round(carbs?carbs:1)
        });
        pieData.push({
            label: 'Protein',
            value: Math.round(protein?protein:1)

        });
        pieData.push({
            label: 'Fat',
            value: Math.round(fat?fat:1)
        });
        calories = calories?calories:0;
        const caloriesLabel = "Calories: " + calories;
        const colorArr = [
            '#fbc620',
            '#FDF414',
            '#FD9314'
        ];
        function colors(index){
            return colorArr[index]
        }

        function textFormatter(text) {
            return text;
        }

        return (
            <div>
                <PieChart
                    data={pieData}
                    width={400}
                    height={400}
                    radius={100}
                    innerRadius={60}
                    sectorBorderColor="white"
                    colors = {colors}
                    valueTextFormatter = {textFormatter}
                    title="Nutrion data"
                    />
                <div className = "result-calories-label">{caloriesLabel}</div>
            </div>
            );
    }
}


NutrionBarChart.propTypes = {
    data: PropTypes.object.isRequired,
};
