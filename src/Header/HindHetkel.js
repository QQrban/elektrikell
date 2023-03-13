import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function HindHetkel() {
    const [text, setText] = useState('')
    const currentPrice = useSelector(state => state.currentPrice)

    useEffect(() => {
            if (currentPrice >= 15) {
                setText('kõrge');
            } else if (currentPrice >= 10) {
                setText('keskmine');
            } else {
                setText('madal');
            }
    }, [currentPrice])

    return (
        <div className="d-flex align-center">
            <span style={(currentPrice >= 10) ?
                { backgroundColor: 'rgba(252, 226, 228, 0.75)', color: 'red' }
                :
                { backgroundColor: 'rgb(209,231,221)', color: 'darkgreen' }}
                className="rounded-2 d-block p-1 nav-hind text-center">
                {text}
            </span>
        </div>
    )
}

export default HindHetkel;