import React, { Component } from 'react'
import axios from 'axios'
import './home.css'
import CardStatus from '../../../components/CardStatus'

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
            isLoading: false
        }
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
    }
    render() {
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
                </header>
            </div>
        )
    }
}
