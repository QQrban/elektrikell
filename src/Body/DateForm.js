import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import moment from 'moment';

function DateForm({ show, setShow, setSearchDate, setErrorMessage }) {

    const handleClose = () => setShow(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const start = event.target.start.value;
        const end = event.target.end.value;
        if (start >= moment().format() || end <= moment().format()) {
            setErrorMessage(`'Alguskuupäev' peab olema minevikus ja 'Lõppkuupäev' peab olema tulevikus`);
            return false;
        }
        setSearchDate({
            start: moment(start).format(),
            end: moment(end).format(),
            pastHours: moment().diff(moment(start), 'hours')
        });

    }

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Määra kuupäevad</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Alguskuupäev</Form.Label>
                            <Form.Control name="start" type="datetime-local" placeholder="start date" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Lõppkuupäev</Form.Label>
                            <Form.Control name="end" type="datetime-local" placeholder="end date" />
                        </Form.Group>
                        <Button variant="success" type="submit" className="w-100">
                            Submit
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default DateForm;