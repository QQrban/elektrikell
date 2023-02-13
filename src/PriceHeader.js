import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import FooterComponent from './Footer';
import FooterHighPrice from './FooterHighPrice';

function PriceHeader() {
  const[active, setActive] = useState('Odavad tunnid');
  const btns = ['Odavad tunnid', 'Tiputunnid']
  return (
      <Row className='mb-2 d-flex align-items-center'>
        <Col>1 of 3</Col>
        <Col className='text-center'>
        <>
            <ButtonGroup size="lg" className="mb-2">
                {btns.map(btn => (
                    <Button  
                        key={btn} 
                        active={btn === active} 
                        onClick={() => { setActive(btn)}}>
                        {btn}
                    </Button>
                ))}
            </ButtonGroup>
         </>
        </Col>
        <Col className='text-end'>3 of 3</Col>
        {active === 'Odavad tunnid' ? <FooterComponent/> : <FooterHighPrice/>}
      </Row>
  );
}

export default PriceHeader;