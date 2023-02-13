import './App.scss';
import Container from 'react-bootstrap/Container';
import NavbarComponent from './NavBar';
import PriceHeader from './PriceHeader';
import FooterComponent from './Footer';
import FooterHighPrice from './FooterHighPrice';
import { useState } from 'react';

function App() {
  const [activePrice, setActivePrice] = useState('low');

  return (
    <>
        <div className="container-wrapper pb-2">
            <Container>
                <NavbarComponent/>
                <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice}/>
                <div className="chart mb-2"></div>
            </Container>
        </div>
        {activePrice === 'low' ? <FooterComponent /> : <FooterHighPrice />}
    </>
  );
}

export default App;
