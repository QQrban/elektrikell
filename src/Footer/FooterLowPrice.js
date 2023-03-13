import Container from 'react-bootstrap/Container';
import Durations from './Durations';
import Countdown from 'react-countdown';
import moment from 'moment';
import { useSelector } from 'react-redux';

function FooterLowPrice() {

    const lowPriceTimestamp = useSelector((state) => state.lowPriceTimestamp);
    const hourRange = useSelector((state) => state.hourRange);
    const seconds = hourRange * 3600;
    const timeFrom = moment(lowPriceTimestamp * 1000).format('HH:mm');
    const timeTo = moment((lowPriceTimestamp + seconds) * 1000).format('HH:mm');

    return (
        <Container className="text-center mt-3 fw-light">
            <div className='fs-2 mb-1'>Tahan tarbida</div>
            <div className='mb-2'>
                <Durations />
            </div>
            <div className='mb-1 fs-5'>Parim aeg selleks on <span className='fw-normal'>{timeFrom}st {timeTo}ni </span>milleni on jäänud</div>
            <div className='mb-1 fs-1 fw-bold'>
                {lowPriceTimestamp && <Countdown date={lowPriceTimestamp * 1000} />}
            </div>
            <div className='fs-5'><a href="https://mkm.ee/energeetika-ja-maavarad/energiatohusus/saastlik-energiatarbimine">Loe lähemalt säästliku energiatarbimist</a></div>
        </Container>
    );
}

export default FooterLowPrice;
