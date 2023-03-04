import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";
import { rangePricesGenerator } from "../helpers/rangePrices";

const AreaLow = ({ hourRange, setLowPriceTimestamp, searchDate, data }) => {
    const [x, setX] = useState(null);
    document.querySelector('body').classList.remove('high')

    useEffect(() => {
        if (!data.length) return;

        const rangePrices = rangePricesGenerator(data, hourRange);

        setX(rangePrices[0].i);
        setLowPriceTimestamp(rangePrices[0].timestamp);
    }, [setLowPriceTimestamp, data, hourRange]);

    return (
        <>
            <ReferenceArea x1={x + searchDate.pastHours} x2={x + hourRange + searchDate.pastHours} fill="green" fillOpacity={0.10} />
        </>
    )
}

export default AreaLow;