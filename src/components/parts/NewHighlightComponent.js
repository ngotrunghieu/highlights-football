import React, { Component } from 'react';

import NewHighlightItemComponent from './NewHighlightItemComponent';
import ContentTitleComponent from '../headers/ContentTitleComponent';

class NewHighlightComponent extends Component {
    async componentDidMount(){
        this.props.onFetchNewHighlightData();
    }
    render() {
        const {data} = this.props;
        console.log(data);
        return (
            <div style={{ marginTop: '10px' }}>
                <ContentTitleComponent to='/news' name_title='News' />
                <NewHighlightItemComponent />
            </div>
        )
    }
}

export default NewHighlightComponent;