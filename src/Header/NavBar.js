import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AddLogo from './AddLogo';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function NavBar() {

    return (
        <div className='position-fixed top-0 w-100 left-0' style={{ backgroundColor: 'rgb(209,231,221)', zIndex: '5' }}>
            <Navbar expand="lg" className="mb-2 ">
                <Container className=''>
                    <Navbar.Brand >
                        <AddLogo />Elektrikell
                    </Navbar.Brand>
                    <Nav className='d-flex gap-5 align-items-center'>
                        <Link style={{ textDecoration: 'none', color: 'green' }} to="/">Home</Link>
                        <Link to="/about"> <Button variant="outline-success" className="text-success"> About </Button></Link>
                    </Nav>

                    {/* <Link style={{ textDecoration: 'none', color: 'green' }} to="/high"><span>Tipptund</span></Link> */}
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
