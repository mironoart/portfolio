import { connect } from 'react-redux';
import Preloader from '../components/Preloader.jsx';

const mapStateToPreloaderProps =(state) => {
    const preloader = state.preloader;
    return {
        preloader,
    };
 };

const mapDispatchToPreloaderProps = (dispatch) =>(
    {
    }
)

const togglePreloader = connect(
    mapStateToPreloaderProps,
    mapDispatchToPreloaderProps
  )(Preloader);

export default togglePreloader;