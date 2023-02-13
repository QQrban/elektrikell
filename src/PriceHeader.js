import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HoursButtonsComponent from './HoursButtons';

function PriceHeader() {
  return (
      <Row className='mb-2 d-flex align-items-center'>
        <Col>1 of 3</Col>
        <Col className='text-center'>
          <HoursButtonsComponent/>
        </Col>
        <Col className='text-end'>3 of 3</Col>
      </Row>
  );
}

export default PriceHeader;