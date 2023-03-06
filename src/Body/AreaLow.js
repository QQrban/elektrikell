import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";
import { rangePricesGenerator } from "../helpers/rangePrices";
import { ResponsiveContainer, LineChart } from "recharts";

const AreaLow = ({ hourRange, setLowPriceTimestamp, searchDate, data, children }) => {
    const [x, setX] = useState(null);
    document.querySelector('body').classList.remove('high')

    useEffect(() => {
        if (!data) return;

        const rangePrices = rangePricesGenerator(data, hourRange);

        setX(rangePrices[0].i);
        setLowPriceTimestamp(rangePrices[0].timestamp);
    }, [setLowPriceTimestamp, data, hourRange]);

    return (
        <>
            <ResponsiveContainer width="95%" height={400}>
                <LineChart data={data}>
                    {children}
                    <ReferenceArea 
                    x1={x + searchDate.pastHours} 
                    x2={x + hourRange + searchDate.pastHours} 
                    fill="green" 
                    fillOpacity={0.10} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default AreaLow;