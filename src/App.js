import './App.scss';
import Container from 'react-bootstrap/Container';
import NavBar from './Header/NavBar';
import PriceHeader from './Header/PriceHeader';
import FooterLowPrice from './Footer/FooterLowPrice';
import FooterHighPrice from './Footer/FooterHighPrice';
import { useState } from 'react';
import Body from './Body/Body';
// import ErrorModal from './ErrorModal';
// import Loading from './Loading';

function App() {
  const [activePrice, setActivePrice] = useState('low');

  // if(true) return <Loading/>; 
  
  // if(true) return <ErrorModal show={true} handleClose={() => {}} errorMessage="Error" />
  return (
    <>
        <div className="container-wrapper pb-2">
            <Container>
                <NavBar/>
                <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice}/>
                <Body/>
            </Container>
        </div>
        {activePrice === 'low' ? <FooterLowPrice /> : <FooterHighPrice />}
    </>
  );
}

export default App;
