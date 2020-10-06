import React from 'react'
import './card.css'

function CardStatus(props) {
    return (
    <div className={`card ${props.color && props.color}`}>
        <div class="card-body">
            <h5 class="card-title text-center">
                {props.title}
            </h5>
            <p class="card-text text-center">
                {props.TotalConfirmed}
            </p>
        </div>
    </div>
    )
}

export default CardStatus
