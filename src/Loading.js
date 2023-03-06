import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

function Loading() {

    const lowPriceTimestamp = useSelector(state => state.lowPriceTimestamp);

    if (lowPriceTimestamp) return null;
    return (
        <div className="loading position-fixed w-100 h-100 top-0 d-flex">
            <Container className='d-flex gap-5 flex-column align-items-center justify-content-center'>
                <Spinner animation="border" variant="primary" className='spinner me-2 fs-2' />
                <div className='text-kell text-primary fw-bold'><i>elektrikell</i></div>
            </Container>
        </div>
    );
}

export default Loading;