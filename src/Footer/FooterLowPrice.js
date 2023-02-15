import Container from 'react-bootstrap/Container';
import Durations from './Durations';
import Countdown from 'react-countdown';

function FooterLowPrice () {
 

    return (
        <Container className="text-center mt-3">
            <div>Tahan tarbida</div>
            <div>
                <Durations/>
            </div>
            <div>Parim aeg</div>
            <div>
                <Countdown date={Date.now() + 16763122}/>
            </div>
            <div>Siis on</div>
        </Container>
    );
}

export default FooterLowPrice;