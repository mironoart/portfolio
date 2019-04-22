import { connect } from 'react-redux';
import Home from '../components/Home.jsx'
import {changeLangToRu, changeLangToEn } from '../actions/HomeActions.js';
import {openModal} from '../actions/modalAction';
import {startPreloader, endPreloader} from '../actions/preloaderActions.js';

const mapStateToTabsProps =(state) => {
    const text = state.changeLanguage;
    const styles = state.changeLanguage.styles;
    return {
        text,
        styles,
    };
 };

const mapDispatchToLangProps = (dispatch) =>(
    {
        changeLangToEn: () => (
            dispatch(changeLangToEn())
        ),
        changeLangToRu: () => (
            dispatch(changeLangToRu())
        ),
        openModal: () => (
            dispatch(openModal())
        ),
        startPreloader: () => (
            dispatch(startPreloader())
        ),
        endPreloader: () => (
            dispatch(endPreloader())
        ),

    }
)
// dispatch( changeLangToEn(lang) )

const homeConnected = connect(
    mapStateToTabsProps,
    mapDispatchToLangProps
  )(Home);

export default homeConnected;