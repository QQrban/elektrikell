import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function Loading() {
    return (
    <>
        <Container className=' w-100 p-100 d-flex align-items-center loading justify-content-center position-absolute top-50 start-50 translate-middle'>
            <Spinner animation="border" variant="primary" className='me-2 fs-2' />
            <div className='text-primary fs-2'>Elektrikell</div>
        </Container>
    </> 
    );
}
  
export default Loading;