import { getCurrentPrice } from "../services/apiService";
import { useEffect, useState } from "react";
import ErrorModal from "../ErrorModal";

function ElektriHind() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [data, setData] = useState(0);
    useEffect(() => {
        getCurrentPrice()
            .then(({ success, data, messages }) => {
                if (!success) {
                    throw new Error(messages[0])
                }
                setData(data[0].price)
            })
            .catch(err => {
                setErrorMessage(err.toString());
            })
    }, [])
    return (
        <>
            <span className="fw-bold d-block fs-1">{data}</span>
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
    )

}

export default ElektriHind;