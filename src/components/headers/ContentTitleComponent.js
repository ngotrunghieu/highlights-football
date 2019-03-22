import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

class ContentTitleComponent extends Component {
    render() {
        const { to, name_title } = this.props;
        return (
            <Route>
                <div>
                    <div className="card-header" style={{padding: '0px', marginBottom: '10px'}}>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: '0px'}}>
                            <div className="collapse navbar-collapse" style={{backgroundColor: '#e9ebee', height: '30px'}}>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to={to} className="nav-link">
                                            <h5 
                                                style={{ color: 'rgb(36, 32, 33)', fontSize: '16' }}
                                            >
                                                {name_title}
                                            </h5>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className=" navbar-text navbar-nav">
                                    <li className="nav-item">
                                        <Link to={to} className="nav-link">
                                            <span style={{ color: 'rgb(66, 103, 178)' }}>More news</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
            </Route>
        )
    }
}

export default ContentTitleComponent;
