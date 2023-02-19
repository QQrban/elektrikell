import { getCurrentPrice } from "../services/apiService";
import { useEffect, useState } from "react";
import ErrorModal from "../ErrorModal";

function ElektriHind() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        getCurrentPrice()
            .then(price => {
                if (Object.keys(price)[0] !== 'success') {
                    throw new Error(price.messages[0])

                }
                const currentHind = price.data.map(e => {
                    return e.price
                });
                setData(currentHind)
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