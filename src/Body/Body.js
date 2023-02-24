import { useState, useEffect } from "react";
import {
    LineChart,
    CartesianGrid,
    XAxis,
    Tooltip,
    YAxis,
    Legend,
    Line,
    ResponsiveContainer,
    ReferenceArea,
    ReferenceLine
} from "recharts";
import { getPriceData } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import moment from "moment";

function Body({ hourRange, activePrice, setLowPriceTimestamp }) {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [x1, setX1] = useState(0);
    const [xHigh, setXHigh] = useState([])

    useEffect(() => {
        getPriceData()
            .then(({ data, success, messages }) => {
                if (!success) {
                    throw messages[0];
                }
                const newData = data.ee.map(d => {
                    return {
                        ...d,
                        price: +((d.price) / 10 * 1.2).toFixed(2),
                        hour: moment.unix(d.timestamp).hours(),
                        current: moment().isSame(moment.unix(d.timestamp), 'hour'),
                    }

                });
                setData(newData)
            })
            .catch(err => {
                setErrorMessage(err.toString());
            });
    }, []);

    useEffect(() => {
        if (data.length) {
            const timeStampNow = moment().unix();
            const futureData = data.filter(e => e.timestamp > timeStampNow)

            const hourRangeLocal = activePrice === 'low' ? hourRange : 1;

            const rangePrices = [];
            futureData.forEach((v, i, arr) => {
                const range = arr.slice(i, i + hourRangeLocal);
                if (range.length === hourRangeLocal) {
                    let sum = 0;
                    range.forEach(v => sum += v.price);
                    rangePrices.push({ sum, i, timestamp: v.timestamp })
                }
            })

            rangePrices.sort((a, b) => a.sum - b.sum)
            if (activePrice === 'low') {
                setX1(rangePrices[0].i)
                setLowPriceTimestamp(rangePrices[0].timestamp);
                setXHigh([]);
            } else {
                rangePrices.reverse();
                let sum = 0;
                const half = rangePrices.slice(0, rangePrices.length / 2);
                half.forEach(price => {
                    sum += price.sum
                })
                let average = sum / half.length;
                setXHigh(half.filter(v => v.sum > average))
            }
        }
    }, [hourRange, data, activePrice, setLowPriceTimestamp]);

    return (
        <>
            <ResponsiveContainer width="95%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <ReferenceLine label={{ value: `kell ${moment().format('HH:mm')}`, position: 'right', fill: 'red' }} x={data.findIndex(e => e.current)} stroke="red" />
                    {xHigh.length ? xHigh.map(x => (
                        <ReferenceArea key={x.i} x1={x.i + 10} x2={x.i + 10 + 1} fill="red" fillOpacity={0.10} />
                    )) : <ReferenceArea x1={x1 + 10} x2={x1 + hourRange + 10} fill="green" fillOpacity={0.10} />}
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#0275d8" />
                </LineChart>
            </ResponsiveContainer>
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
    )
}
export default Body;