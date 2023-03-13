import './App.scss';
import Container from 'react-bootstrap/Container';
import PriceHeader from './Header/PriceHeader';
import FooterLowPrice from './Footer/FooterLowPrice';
import FooterHighPrice from './Footer/FooterHighPrice';
import Body from './Body/Body';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import ErrorModal from './ErrorModal';

function Elektrikell() {
    
    const activePrice = useSelector(state => state.activePrice);
    
    return (
        <>
            <div className="container-wrapper pb-2">
                <Container style={{ paddingTop: '100px' }}>
                    <PriceHeader />
                    <Body  />
                    <ErrorModal/>
                </Container>
            </div>
            {activePrice === 'low' ?
                <FooterLowPrice />
                : <FooterHighPrice />
                }
            <Loading />
        </>
    );
}

export default Elektrikell;
