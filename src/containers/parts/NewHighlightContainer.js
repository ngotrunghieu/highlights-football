import {connect} from 'react-redux';

import NewHighlightComponent from '../../components/parts/NewHighlightComponent';
import {actFetchNewHighlightData} from '../../actions/index';

const mapStateToProps = state => ({
    data : state.NewHighLightReducers
});

const mapDispatchToProps = dispatch => {
    return{
        onFetchNewHighlightData: () => {
            dispatch(actFetchNewHighlightData())
        }
    }
}

const NewHighlightContainer = connect(mapStateToProps, mapDispatchToProps)(NewHighlightComponent);
export default NewHighlightContainer;
