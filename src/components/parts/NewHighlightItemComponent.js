import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import {common} from '../../common/common';

class NewHighlightItemComponent extends Component {
    showNewItem = (data) => {
        let result = null;
        if (data.length > 0) {
            result = data.map((data, item) => {
                return (
                    <div key={item} className="col-sm-4" style={{ paddingRight: '0', marginBottom: '15px' }}>
                        <Link className="card-link" to="">
                            <div className="card">
                                <img className="card-img-top" src="" alt="Card image cap" />
                                <div className="card-block" style={{ margin: "5px" }}>
                                    <h6 className="card-title" style={{ color: 'rgb(66, 103, 178)' }}>{data.title.rendered}</h6>
                                    <p className="card-text">
                                        <small className="text-muted">{common.formatDate(data.date)}</small>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            });
        }
        return result;
    };

    render() {
        const { data } = this.props;
        return (
            <Route>
                <div className="row" style={{ marginRight: 0 }}>
                    {this.showNewItem(data)}
                </div>
            </Route>
        )
    }
}

export default NewHighlightItemComponent;
