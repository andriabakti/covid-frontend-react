import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'
import './chart.css'

export default class Chart extends Component {
    constructor(props) {
        super()
        this.state = {
            dataChart: {
                labels: [],
                datasets: [
                    {
                        labels: "Test",
                        data: [],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            }
        }
    }
    // componentDidMount() {
        // const dataChart = this.state.dataChart
        // dataChart.labels = this.props.labels
        // dataChart.datasets[0].data = this.props.data
        // this.setState({
        //     dataChart: dataChart
        // })
    // }
    render() {
        const dataChart = this.state.dataChart
        dataChart.labels = this.props.labels
        dataChart.datasets[0].data = this.props.data
        return (
            <div className="chart">
                <Doughnut data={dataChart} width={50} height={25} />
            </div>
        )
    }
}
