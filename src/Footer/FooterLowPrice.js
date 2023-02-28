import Container from 'react-bootstrap/Container';
import Durations from './Durations';
import Countdown from 'react-countdown';
import moment from 'moment';

function FooterLowPrice(props) {
    const timeFrom = moment(props.lowPriceTimestamp * 1000).format('HH:mm');
    const seconds = props.hourRange * 3600;
    const timeTo = moment((props.lowPriceTimestamp + seconds) * 1000).format('HH:mm');
    return (
        <Container className="text-center mt-3 fw-light">
            <div className='fs-2 mb-1'>Tahan tarbida</div>
            <div className='mb-2'>
                <Durations {...props} />
            </div>
            <div className='mb-1 fs-5'>Parim aeg selleks on <span className='fw-normal'>{timeFrom}st {timeTo}ni </span>milleni on jäänud</div>
            <div className='mb-1 fs-1 fw-bold'>
                {props.lowPriceTimestamp && <Countdown date={props.lowPriceTimestamp * 1000} />}
            </div>
            <div className='fs-5'><a href="https://mkm.ee/energeetika-ja-maavarad/energiatohusus/saastlik-energiatarbimine">Loe lähemalt säästliku energiatarbimist</a></div>
        </Container>
    );
}

export default FooterLowPrice;
