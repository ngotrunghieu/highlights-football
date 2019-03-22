import React, { Component } from 'react';

// import NewComponent from '../parts/NewComponent';
import NewHighlightContainer from '../../containers/parts/NewHighlightContainer';

class HomeComponent extends Component {
    render() {
        return (
            <div style={{marginTop: '10px'}}>
                <NewHighlightContainer/>
            </div>
        )
    }
}

export default HomeComponent;
