import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="container">
                <a class="navbar-brand" href="#">Covid App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
