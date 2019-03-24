import React, { Component } from 'react';

import NewHighlightItemComponent from './NewHighlightItemComponent';
import ContentTitleComponent from '../headers/ContentTitleComponent';

const PER_PAGE = 9

class NewHighlightComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            per_page: PER_PAGE
        }
    }
    async componentDidMount(){
        this.props.onFetchNewHighlightData(this.state.per_page);
    }

    loadMore = () => {
        const current_per_page = this.state.per_page;
        const new_per_page = current_per_page + 9;
        this.props.onFetchNewHighlightData(new_per_page);
        this.setState({
            per_page: new_per_page
        });
    }

    render() {
        const {Newhighlight_Data} = this.props;
        return (
            <div style={{ marginTop: '10px' }}>
                <ContentTitleComponent to='/news' name_title='News' />
                <NewHighlightItemComponent data={Newhighlight_Data}/>
                <div style={{textAlign: 'center'}}>
                    <button onClick={this.loadMore} className="btn btn-outline-secondary">Load More></button>
                </div>
            </div>
        )
    }
}

export default NewHighlightComponent;