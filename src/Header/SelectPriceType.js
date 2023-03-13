import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setActivePrice } from "../services/stateService";

function SelectPriceType() {

    const activePrice = useSelector(state => state.activePrice);
    const dispatch = useDispatch();
    return (
        <>
            <ButtonGroup style={{backgroundColor: 'white', padding: '5px', boxShadow: '1px 1px 5px gray'}} aria-label="Basic example">
                <Button variant="outline-success" active={activePrice === 'low'} onClick={() => dispatch(setActivePrice('low'))}>Odavad Tunnid</Button>
                <Button variant="outline-danger" active={activePrice === 'high'} onClick={() => dispatch(setActivePrice('high'))}>Tiputunnid</Button>
            </ButtonGroup>
        </>
    )
}

export default SelectPriceType;