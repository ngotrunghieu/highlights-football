import {connect} from 'react-redux';

import NewHighlightComponent from '../../components/parts/NewHighlightComponent';
import {actFetchNewHighlightData} from '../../actions/index';

const mapStateToProps = state => ({
    Newhighlight_Data : state.NewHighLightReducers
});

const mapDispatchToProps = dispatch => {
    return{
        onFetchNewHighlightData: (per_page) => {
            dispatch(actFetchNewHighlightData(per_page))
        }
    }
}

const NewHighlightContainer = connect(mapStateToProps, mapDispatchToProps)(NewHighlightComponent);
export default NewHighlightContainer;
