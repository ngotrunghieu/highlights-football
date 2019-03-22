import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from '../routes';
import HeaderComponent from './headers/HeaderComponent';

class MainComponent extends Component {
    render() {
        const showContentMenus = (routes) => {
            let result = null;
            if (routes.length > 0) {
                result = routes.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                    )
                })
            }
            return result;
        }
        return (
            <Router>
                <div>
                    <HeaderComponent />
                    <div className="container_style">
                        <Switch>
                            {showContentMenus(routes)}
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default MainComponent;
