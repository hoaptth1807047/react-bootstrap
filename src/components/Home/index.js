import React, {Component} from 'react';
import * as ROUTES from '../constants/routes'
import {Link} from "react-router-dom";

class HomePage extends Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <div className="navbar-brand" href=""><span
                            className="flaticon-pizza-1 mr-1"/>
                            Cowboy <br/><small>Jack</small>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu"/> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a href="" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Menu</a></li>
                                <li className="nav-item"><a href=""
                                                            className="nav-link">Services</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Blog</a></li>
                                <li className="nav-item"><a href="" className="nav-link">About</a>
                                </li>
                                <li className="nav-item"><a href="" className="nav-link">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to={ROUTES.SIGN_UP}>Sign Up</Link></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default HomePage;