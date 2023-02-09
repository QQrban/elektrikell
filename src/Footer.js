import Container from 'react-bootstrap/Container';
import DurationsComponent from './Durations'

function FooterComponent () {
    return (
        <Container className="text-center mt-3">
            <div>Tahan tarbida</div>
            <div>
                <DurationsComponent/>
            </div>
            <div>Parim aeg</div>
            <div>Timer</div>
            <div>Siis on</div>
        </Container>
    );
}

export default FooterComponent;