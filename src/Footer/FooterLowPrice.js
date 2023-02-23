import Container from 'react-bootstrap/Container';
import Durations from './Durations';
import Countdown from 'react-countdown';

function FooterLowPrice (props) {
    return (
        <Container className="text-center mt-3 fw-light">
            <div className='fs-2 mb-1'>Tahan tarbida</div>
            <div className='mb-2'>
                <Durations {...props}/>
            </div>
            <div className='mb-1 fs-5'>Parim aeg selleks on <span className='fw-normal'>0:00st 1:00ni, </span>milleni on jäänud</div>
            <div className='mb-1 fs-1 fw-bold'>
                {props.lowPriceTimestamp && <Countdown date={props.lowPriceTimestamp * 1000}/>}
            </div>
            <div className='fs-5'>Siis on kilovatt-tunni hind <span className='text-success fw-normal'>7.80</span> senti, mis on <span className='fw-bold'>53%</span> odavam kui praegu</div>
        </Container>
    );
}

export default FooterLowPrice;