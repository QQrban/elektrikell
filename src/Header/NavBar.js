import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import AddLogo from './AddLogo';
import { useDispatch } from 'react-redux';
import { setActivePrice } from '../services/stateService';

function NavBar() {

    const dispatch = useDispatch();

    const handleClick = () => {
        document.querySelector('body').classList.remove('high');
        document.querySelector('.navbar').classList.remove('high');
    }

    return (
        <div  style={{ backgroundColor: 'rgb(209,231,221)', zIndex: '5' }}>
            <Navbar expand="lg" className="mb-2 ">
                <Container className=''>
                    <Navbar.Brand >
                        <AddLogo />Elektrikell
                    </Navbar.Brand>
                    <Nav className="d-flex gap-5 align-items-center">
                        <Link onClick={dispatch(setActivePrice('low'))} style={{ textDecoration: 'none', color: 'green' }} to="/elektrikell">Home</Link>
                        <Link to="/elektrikell/about"> <Button onClick={() => handleClick()}  variant="outline-success" className="text-success"> About </Button></Link>
                    </Nav>

                    {/* <Link style={{ textDecoration: 'none', color: 'green' }} to="/high"><span>Tipptund</span></Link> */}
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
