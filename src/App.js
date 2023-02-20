import './App.scss';
import Container from 'react-bootstrap/Container';
import NavBar from './Header/NavBar';
import PriceHeader from './Header/PriceHeader';
import FooterLowPrice from './Footer/FooterLowPrice';
import FooterHighPrice from './Footer/FooterHighPrice';
import { useState } from 'react';
import Body from './Body/Body';


function App() {
  const [activePrice, setActivePrice] = useState('low');
  const [hourRange, setHourRange] = useState(1)

  return (
    <>
        <div className="container-wrapper pb-2">
            <Container>
                <NavBar/>
                <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice}/>
                <Body hourRange={hourRange} />
            </Container>
        </div>
        {activePrice === 'low' ? <FooterLowPrice hourRange={hourRange} setHourRange={setHourRange}/> : <FooterHighPrice />}
    </>
  );
}

export default App;
