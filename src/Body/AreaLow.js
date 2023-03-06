import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";
import { rangePricesGenerator } from "../helpers/rangePrices";
import { ResponsiveContainer, LineChart } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { setLowPriceTimestamp } from '../services/stateService'

const AreaLow = ({searchDate, data, children }) => {
    const [x, setX] = useState(null);
    document.querySelector('body').classList.remove('high')


    const hourRange = useSelector((state) => state.hourRange);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!data) return;

        const rangePrices = rangePricesGenerator(data, hourRange);

        setX(rangePrices[0].i);
        dispatch(setLowPriceTimestamp(rangePrices[0].timestamp));
    }, [data, hourRange, dispatch]);

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