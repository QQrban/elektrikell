import { useSelector } from 'react-redux';

function ElektriHind() {

    const currentPrice = useSelector(state => state.currentPrice)

    return (
        <>
            <span className="fw-bold d-block fs-1">{currentPrice}</span>
        </>
    )

}

export default ElektriHind;