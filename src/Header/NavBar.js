import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AddLogo from './AddLogo';

function NavBar() {
    return (
        <div className='position-absolute top-0 w-100 left-0 d-flex justify-content-center' style={{ backgroundColor: 'rgb(209,231,221)', zIndex: '5' }}>
            <Navbar expand="lg" className="mb-2 ">
                <Container >
                    <Navbar.Brand href="#home">
                        <AddLogo />Elektrikell
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" c>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;