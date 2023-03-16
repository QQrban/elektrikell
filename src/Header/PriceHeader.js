import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import SelectPriceType from './SelectPriceType';
import HindHetkel from './HindHetkel';
import ElektriHind from './ElektriHind';
import { getCurrentPrice } from '../services/apiService';
import { setCurrentPrice, setErrorMessage } from '../services/stateService';

function PriceHeader() {

    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentPrice()
            .then(({ success, data, messages }) => {
                if (!success) {
                    throw messages[0];
                }

                const kwPrice = +(data[0].price / 10 * 1.2).toFixed(2);
                dispatch(setCurrentPrice(kwPrice))
            })
            .catch((error) => dispatch(setErrorMessage(error.toString())));
    }, [dispatch]);

    return (
        <Row className="mb-2 d-flex align-items-center">

            <Col className="fs-5 fw-light">Elektri hind hetkel on
                <HindHetkel />
            </Col>
            <Col className="text-center">
                <>
                    <ButtonGroup size="lg" className="mb-2">
                        <SelectPriceType />
                    </ButtonGroup>
                </>
            </Col>
            <Col className="text-end fw-light">
                <ElektriHind />
                senti / kilovatt-tund
            </Col>
        </Row>
    );
}

export default PriceHeader;