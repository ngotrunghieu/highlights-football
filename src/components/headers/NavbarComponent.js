import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import logo from "../../asset/Images/logo.png";

const menus = [
    { name: 'home', to: '/', exact: true },
    { name: 'All Leagues', to: '/all_leagues', exact: false },
    { name: 'popular', to: '/popular', exact: false },
    { name: 'Goals Of The Week', to: '/goal_of_the_week', exact: false },
    { name: 'Football Live Socer', to: '/goal_of_the_week', exact: false },
]

const Menu = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? "active" : "";
            if (label === "home") {
                return (
                    <li className={`nav-item ${active}`} style={{width: '250px'}}>
                        <Link to={to} style={{float: 'left'}}>
                            <img src={logo} width="50" height="40" className="d-inline-block align-top" alt="" />
                        </Link>
                        <Link className="nav-link" style={{color: '#FBFBF1'}} to={to}>
                            <h5>Highlights Football</h5>
                        </Link>
                    </li>
                )
            } else {
                return (
                    <li className={`nav-item ${active}`}>
                        <Link className="nav-link" style={{color: '#FBFBF1'}} to={to}>{label}</Link>
                    </li>
                )
            }
        }}>
        </Route>
    )
};

class NavbarComponent extends Component {
    render() {
        const showMenus = (menus) => {
            let result = null;
            if (menus.length > 0) {
                result = menus.map((menu, index) => {
                    return (
                        <Menu key={index} to={menu.to} label={menu.name} activeOnlyWhenExact={menu.exact} />
                    )
                })
            }

            return result;
        }
        return (
            <Route>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgb(36, 32, 33)'}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {showMenus(menus)}
                        </ul>
                    </div>
                </nav>
            </Route>
        )
    }
}

export default NavbarComponent;