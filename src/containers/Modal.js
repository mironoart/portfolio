import { connect } from 'react-redux';
import Modal from '../components/Modal.jsx';
import {openModal, closeModal } from '../actions/modalAction';

const mapStateToModalProps =(state) => {
    const modal = state.modalMenu;
    return {
        modal,
    };
 };

const mapDispatchToModalProps = (dispatch) =>(
    {
        openModal: () => (
            dispatch(openModal())
        ),
        closeModal: () => (
            dispatch(closeModal())
        ),
    }
)

const toggleModal = connect(
    mapStateToModalProps,
    mapDispatchToModalProps
  )(Modal);

export default toggleModal;