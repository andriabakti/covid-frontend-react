import React, { Component } from 'react'
import axios from 'axios'
import './home.css'
import CardStatus from '../../../components/CardStatus'
import Chart from '../../../components/Chart'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            globalStatus: {
                NewConfirmed: 0,
                TotalConfirmed: 0,
                NewDeaths: 0,
                TotalDeaths: 0,
                NewRecovered: 0,
                TotalRecovered: 0
            },
            countries: [],
            allCountries: [],
            isLoading: false
        }
    }
    getCountries() {
        this.setState({
            isLoading: true
        })
        axios.get(`https://api.covid19api.com/countries`).then((res) => {
            this.setState({
                allCountries: res.data,
                isLoading: false
            })
        })
    }
    componentDidMount() {
        this.setState({
            isLoading: true
        })
        axios.get(`https://api.covid19api.com/summary`)
        .then((res) => {
            this.setState({
                globalStatus: res.data.Global,
                countries: res.data.Countries,
                isLoading: false
            })
        })
        this.getCountries()
    }
    render() {
        const {TotalConfirmed, TotalDeaths, TotalRecovered} = this.state.globalStatus
        return (
            <div className="container">
                {this.state.isLoading && <h1>Loading ...</h1>}
                <header>
                    <div className="row">
                        <div className="col-md-3">
                            <CardStatus
                                title="Total Confirmed"
                                TotalConfirmed={this.state.globalStatus.TotalConfirmed}
                                color="blue"
                            />
                        </div>
                        <div className="col-md-3">
                            <CardStatus
                                title="Total Deaths"
                                TotalConfirmed={this.state.globalStatus.TotalDeaths}
                                color="red"
                            />
                        </div>
                        <div className="col-md-3">
                            <CardStatus
                                title="Total Recovered"
                                TotalConfirmed={this.state.globalStatus.TotalRecovered}
                                color=""
                            />
                        </div>
                        <div className="col-md-3">
                            <CardStatus
                                title="New Confirmed"
                                TotalConfirmed={this.state.globalStatus.NewConfirmed}
                                color=""
                            />
                        </div>
                    </div>
                    <div className="container-chart">
                        <Chart
                            labels={['Total Confirmed', 'Total Deaths', 'Total Recovered']}
                            data={[TotalConfirmed, TotalDeaths, TotalRecovered]} />
                    </div>
                </header>
                <div className="countries">
                    <h1>Countries</h1>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Countries</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.allCountries.map((item, index) => (
                                    <tr>
                                        <th scope="row">{index++}</th>
                                        <td>{item.Country}</td>
                                        <td>
                                            <Link to={`/countries/${item.Country}`}>
                                                <i class="fas fa-search"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
