import { getCurrentPrice } from "../services/apiService";
import { useEffect, useState } from "react";
import ErrorModal from "../ErrorModal";
import { currentPrice } from "../services/apiService";

function ElektriHind() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [data, setData] = useState(0);
    useEffect(() => {
        currentPrice(getCurrentPrice, setData, setErrorMessage)
    }, [])
    return (
        <>
            <span className="fw-bold d-block fs-1">{data}</span>
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
    )

}

export default ElektriHind;