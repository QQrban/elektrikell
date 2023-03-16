import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReferenceArea } from 'recharts';
import { ResponsiveContainer, LineChart } from 'recharts';
import { rangePricesGenerator } from '../helpers/rangePrices';
import { setLowPriceTimestamp } from '../services/stateService';

const AreaLow = ({ searchDate, data, children }) => {
    const [x, setX] = useState(null);
    
    const { hour: durationParam } = useParams();

    const hourRange = useSelector((state) => state.hourRange);
    const dispatch = useDispatch();

    const selectedTime = durationParam ? +durationParam : hourRange;

    useEffect(() => {
        document.querySelector('body').classList.remove('high');
        document.querySelector('.navbar').classList.remove('high');
        document.querySelector('.navbar').classList.add('low');

        if (!data) return;

        const rangePrices = rangePricesGenerator(data, selectedTime);

        setX(rangePrices[0].i);
        dispatch(setLowPriceTimestamp(rangePrices[0].timestamp));
    }, [data, selectedTime, dispatch]);

    return (
        <>
            <ResponsiveContainer width="95%" height={400}>
                <LineChart data={data}>
                    {children}
                    <ReferenceArea
                        x1={x + searchDate.pastHours}
                        x2={x + selectedTime + searchDate.pastHours}
                        fill="green"
                        fillOpacity={0.10} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default AreaLow;