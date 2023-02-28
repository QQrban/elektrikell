import { useState, useEffect } from "react";
import {
    LineChart,
    CartesianGrid,
    XAxis,
    Tooltip,
    YAxis,
    Line,
    ResponsiveContainer,
    ReferenceLine
} from "recharts";
import { getPriceData } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import moment from "moment";
import AreaLow from "./AreaLow";
import AreaHigh from "./AreaHigh";
import Button from "react-bootstrap/esm/Button";
import DateForm from "./DateForm";

const pastHours = 10;
const start = moment().subtract(pastHours, 'hours').format();
const end = moment().add(30, 'hours').format();

function Body({ hourRange, activePrice, setLowPriceTimestamp }) {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [rangePrices, setRangePrices] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [searchDate, setSearchDate] = useState({
        start, end, pastHours
    })

    useEffect(() => {
        getPriceData(searchDate)
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
                setData(newData);
            })
            .catch(err => {
                setErrorMessage(err.toString());
            });
    }, [searchDate]);

    useEffect(() => {
        if (data.length) {
            const timeStampNow = moment().unix();
            const futureData = data.filter(e => e.timestamp > timeStampNow)

            const hourRangeLocal = activePrice === 'low' ? hourRange : 1;

            const rangePricez = []
            futureData.forEach((v, i, arr) => {
                const range = arr.slice(i, i + hourRangeLocal);
                if (range.length === hourRangeLocal) {
                    let sum = 0;
                    range.forEach(v => sum += v.price);
                    rangePricez.push({ sum, i, timestamp: v.timestamp })
                }
            });
            
            rangePricez.sort((a, b) => a.sum - b.sum);
            setRangePrices(rangePricez);
        }
    }, [hourRange, data, activePrice]);

    return (
        <>
            <ResponsiveContainer width="95%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <ReferenceLine className="line" label={{ value: `kell ${moment().format('HH:mm')}`, position: 'insideTopLeft', fill: 'red' }} x={data.findIndex(e => e.current)} stroke="red" />
                    {activePrice === 'high' ?
                        AreaHigh({ rangePrices }) 
                        :
                        AreaLow({ hourRange, setLowPriceTimestamp, rangePrices, searchDate })
                    }
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#0275d8" />
                </LineChart>
            </ResponsiveContainer>
            <div className="text-center">
                <Button className="text-white" variant="warning" onClick={() => setShowForm(true)}>Määra kuupäevad</Button>
            </div>
            <DateForm
                show={showForm}
                setShow={setShowForm}
                setSearchDate={setSearchDate}
            />
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
    )
}
export default Body;