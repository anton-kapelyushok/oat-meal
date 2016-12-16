import React, { Component, PropTypes } from 'react';
import 'rc-slider/assets/index.css';
import { PieChart } from 'react-d3';


export default class NutrionBarChart extends Component {
    render() {
        this.props.data;
        {/*
         calories: 0,
         carbs: 0,
         fat: 0,
         protein: 0,
         },*/
            const total = this.props.data.carbs + this.props.data.fat + this.props.data.protein;
            const carbs_p = (this.props.data.carbs / total) * 100;
            const fat_p = (this.props.data.fat / total) * 100;
            const protein_p = (this.props.data.protein / total) * 100;
            const pieData = [];
            pieData.push({
                label: 'Carbs',
                value: Math.round(carbs_p)
            });
            pieData.push({
                label: 'Fat',
                value: Math.round(fat_p)
            });
            pieData.push({
                label: 'Protein',
                value: Math.round(protein_p)
            });

            return (
                <PieChart
                    data={pieData}
                    width={400}
                    height={400}
                    radius={100}
                    innerRadius={20}
                    sectorBorderColor="white"
                    title="Pie Chart"
                    />
            );
        }
    }
}


NutrionBarChart.propTypes = {
    data: PropTypes.object.isRequired,
};