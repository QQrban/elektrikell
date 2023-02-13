import './App.scss';
import Container from 'react-bootstrap/Container';
import NavbarComponent from './NavBar';
import PriceHeader from './PriceHeader';
import FooterComponent from './Footer';
import FooterHighPrice from './FooterHighPrice';

function App() {
  return (
    <>
        <div className="container-wrapper pb-2">
            <Container>
                <NavbarComponent/>
                <PriceHeader/>
                <div className="chart mb-2"></div>
            </Container>
        </div>
            <FooterComponent />
            {/* <FooterHighPrice /> */}
    </>
  );
}

export default App;
