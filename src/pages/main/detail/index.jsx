import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

function Detail(props) {
    const [value, setValue] = useState(10)
    const [localStatus, setLocalStatus] = useState([])

    useEffect(() => {
        axios.get(
            `https://api.covid19api.com/country/${props.match.params.countries}?from=2020-10-01T00:00:00Z&to=2020-10-05T00:00:00Z`)
            .then((res) => {
                setLocalStatus(res.data)
            })
    }, [props.match.params.countries])

    const editValue = () => {
        setValue(value*2)
    }
    return (
        <div className="container">
            <h1>Halaman Detail {props.match.params.countries} {localStatus} </h1>
            <button onClick={()=>{
                props.history.goback()
                }}>Back</button>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {localStatus.map((item, index) => (
                        <tr>
                            <th scope="row">{index++}</th>
                            <td>{moment(item.Date).format('LL')}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Deaths}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>{value}</h4>
            <button onClick={editValue}>Edit</button>
        </div>
    )
}

export default Detail
