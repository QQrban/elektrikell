import './App.scss';
import Container from 'react-bootstrap/Container';
import NavBar from './Header/NavBar';
import PriceHeader from './Header/PriceHeader';
import FooterLowPrice from './Footer/FooterLowPrice';
import FooterHighPrice from './Footer/FooterHighPrice';
import { useState } from 'react';
import Body from './Body/Body';
import Loading from './Loading'

function App() {
  const [activePrice, setActivePrice] = useState('low');
  const [hourRange, setHourRange] = useState(1)
  const [lowPriceTimestamp, setLowPriceTimestamp] = useState(0);

  return (
    <>
      <div className="container-wrapper pb-2">
        <NavBar />
        <Container style={{ paddingTop: '100px' }}>
          <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice} />
          <Body hourRange={hourRange} activePrice={activePrice} setLowPriceTimestamp={setLowPriceTimestamp} />
        </Container>
      </div>
      {activePrice === 'low' ?
        <FooterLowPrice hourRange={hourRange}
          setHourRange={setHourRange}
          lowPriceTimestamp={lowPriceTimestamp}
        />
        : <FooterHighPrice />}
      {!lowPriceTimestamp && <Loading />}
    </>
  );
}

export default App;
