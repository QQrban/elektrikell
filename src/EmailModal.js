import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function EmailModal({ showForm, handleClose }) {
    return (
        <Modal show={showForm} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Kirjuta oma arvamust!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="E-posti aadress"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control placeholder="Kirjuta oma sõnum siia" as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="w-25" variant="success" onClick={handleClose}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EmailModal;