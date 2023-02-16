import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

function selectPriceType({ activePrice, setActivePrice }) {
    return (
        <>
            <ButtonGroup aria-label="Basic example">
                <Button active={activePrice === 'low'} onClick={() => setActivePrice('low')}>Odavad Tunnid</Button>
                <Button active={activePrice === 'high'} onClick={() => setActivePrice('high')}>Tiputunnid</Button>
            </ButtonGroup>
        </>
    )
}

export default selectPriceType;