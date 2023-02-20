import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import SelectPriceType from './SelectPriceType';
import HindHetkel from './HindHetkel';
import ElektriHind from './ElektriHind';

function PriceHeader(props) {
  return (
      <Row className='mb-2 d-flex align-items-center'>
        
        <Col className='fs-5 fw-light'>Elektri hind hetkel on
          <HindHetkel/>
        </Col>
        <Col className='text-center'>
        <>
            <ButtonGroup size="lg" className="mb-2">
            <SelectPriceType{...props}/>
            </ButtonGroup>
         </>
        </Col>
        <Col className='text-end fw-light'>
          <ElektriHind/>
          €/MWh
        </Col>
      </Row>
  );
}

export default PriceHeader;