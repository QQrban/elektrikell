import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage } from './services/stateService';

function ErrorModal() {

    const errorMessage = useSelector(state => state.errorMessage)
    const dispatch = useDispatch()
    
    return (
        <Modal show={!!errorMessage} onHide={() => dispatch(setErrorMessage(null))}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessage}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(setErrorMessage(null))}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ErrorModal;