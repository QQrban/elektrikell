import { useEffect, useState } from "react";
import { currentPrice } from "../services/apiService";
import { getCurrentPrice } from "../services/apiService";

function HindHetkel() {
    const [data, setData] = useState(0);
    const [text, setText] = useState('')

    useEffect(() => {
        currentPrice(getCurrentPrice, setData);
        if (data) {
            if (data >= 15) {
                setText('kõrge');
            } else if (data >= 10) {
                setText('keskmine');
            } else {
                setText('madal');
            }

        }
    }, [data])

    return (
        <>
            <span style={(data >= 10) ? { backgroundColor: 'rgba(252, 226, 228, 0.75)', color: 'red' } : { backgroundColor: 'rgb(209,231,221)', color: 'darkgreen' }} className="rounded-2 d-block ps-2 nav-hind">{text}</span>
        </>
    )
}

export default HindHetkel;