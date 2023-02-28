import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

function selectPriceType({ activePrice, setActivePrice }) {
    return (
        <>
            <ButtonGroup style={{backgroundColor: 'white', padding: '5px', boxShadow: '1px 1px 5px gray'}} aria-label="Basic example">
                <Button variant="outline-success" active={activePrice === 'low'} onClick={() => setActivePrice('low')}>Odavad Tunnid</Button>
                <Button variant="outline-danger" active={activePrice === 'high'} onClick={() => setActivePrice('high')}>Tiputunnid</Button>
            </ButtonGroup>
        </>
    )
}

export default selectPriceType;