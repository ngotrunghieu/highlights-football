import React, { Component } from 'react';

import image from "../../asset/Images/messi.jpg"
import { Route, Link } from "react-router-dom";

const items = [1, 2, 3, 4, 5];

class NewHighlightItemComponent extends Component {
    render() {
        const showNewItem = () => {
            let result = null;
            if (items.length > 0) {
                result = items.map((index, item) => {
                    return (
                        <div key={index} className="col-sm-4" style={{ paddingRight: '0', marginBottom: '15px' }}>
                            <Link className="card-link" to="">
                                <div className="card">
                                    <img className="card-img-top" src={image} alt="Card image cap" />
                                    <div className="card-block" style={{ margin: "5px" }}>
                                        <h5 className="card-title" style={{ color: 'rgb(66, 103, 178)' }}>Card title</h5>
                                        <p 
                                            className="card-text" 
                                            style={{ color: 'rgb(66, 103, 178)' }}
                                        >
                                            This card has supporting text below as a natural lead-in to additional content.
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            return result;
        }
        return (
            <Route>
                <div className="row" style={{marginRight: 0}}>
                    {showNewItem(items)}
                </div>
            </Route>
        )
    }
}

export default NewHighlightItemComponent;
