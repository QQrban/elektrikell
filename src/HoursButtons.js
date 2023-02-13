import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function HoursButtonsComponent() {
    // const[active, setActive] = useState('Odavad tunnid');
    // const buttons = [1, 2]
    return (
        <>
            <ButtonGroup size="lg" className="mb-2">

                <Button key={1} active>Odavad tunnid</Button>
                <Button key={2} >Tiputunnid</Button>
            </ButtonGroup>
        </>
    )
}

export default HoursButtonsComponent;