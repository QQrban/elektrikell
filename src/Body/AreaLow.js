import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";

const AreaLow = ({ hourRange, setLowPriceTimestamp, rangePrices, searchDate }) => {
    const [x, setX] = useState(0);

    useEffect(() => {
        if (!rangePrices) return; 
        setX(rangePrices[0].i)
        setLowPriceTimestamp(rangePrices[0].timestamp);
    }, [rangePrices, setLowPriceTimestamp]);

    return (
        <>
            <ReferenceArea x1={x + searchDate.pastHours} x2={x + hourRange + searchDate.pastHours} fill="green" fillOpacity={0.10} />
        </>
    )
}

export default AreaLow;