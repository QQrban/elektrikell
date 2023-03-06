import './App.scss';
import Container from 'react-bootstrap/Container';
import PriceHeader from './Header/PriceHeader';
import FooterLowPrice from './Footer/FooterLowPrice';
import FooterHighPrice from './Footer/FooterHighPrice';
import { useState } from 'react';
import Body from './Body/Body';
import Loading from './Loading';
// import { useParams } from 'react-router-dom';

function Elektrikell() {
    // const params = useParams();
    const [activePrice, setActivePrice] = useState('low');
    // useEffect(() => {
    //   params.activePrice && setActivePrice(params.activePrice)
    // }, [params])
    return (
        <>
            <div className="container-wrapper pb-2">
                <Container style={{ paddingTop: '100px' }}>
                    <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice} />
                    <Body activePrice={activePrice} />
                </Container>
            </div>
            {activePrice === 'low' ?
                <FooterLowPrice />
                : <FooterHighPrice />
                && <Loading />}
        </>
    );
}

export default Elektrikell;
