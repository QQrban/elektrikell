import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import moment from 'moment';
import { setErrorMessage } from '../services/stateService';
import { useDispatch } from 'react-redux';

function DateForm({ show, setShow, setSearchDate}) {

    const handleClose = () => setShow(false);

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        let start = event.target.start.value;
        let end = event.target.end.value;

        if (moment().diff(start) < 0 || moment().diff(end) > 0 || start === '' || end === '') {
            dispatch(setErrorMessage(`'Alguskuupäev' peab olema minevikus ja 'Lõppkuupäev' peab olema tulevikus`))
            return false;
        }
        
        let oneDay = 86400000; //milliseconds in one day
        if (moment(end).diff(start) <= oneDay) {
            dispatch(setErrorMessage(`'Alguskuupäeva' ja 'Lõppkuupäeva' vahe peab olema vähemalt 1 päev`))
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
                            Otsi
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default DateForm;