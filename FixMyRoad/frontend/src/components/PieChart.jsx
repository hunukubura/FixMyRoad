import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    const chartData = {
        labels: ['Pending', 'In Progress', 'Resolved'],
        datasets: [
            {
                data: data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <div className="pie-chart">
            <h2 className="text-center">Issue Statuses</h2>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;