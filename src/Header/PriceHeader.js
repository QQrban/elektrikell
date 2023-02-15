import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import SelectPriceType from './SelectPriceType';

function PriceHeader(props) {
  return (
      <Row className='mb-2 d-flex align-items-center'>
        <Col>1 of 3</Col>
        <Col className='text-center'>
        <>
            <ButtonGroup size="lg" className="mb-2">
            <SelectPriceType{...props}/>
            </ButtonGroup>
         </>
        </Col>
        <Col className='text-end'>3 of 3</Col>
      </Row>
  );
}

export default PriceHeader;