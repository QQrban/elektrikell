import { useState, useEffect } from 'react';
import {
    CartesianGrid,
    XAxis,
    Tooltip,
    YAxis,
    Line,
    ReferenceLine
} from 'recharts';
import {  useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Button from 'react-bootstrap/esm/Button';
import { getPriceData } from '../services/apiService';
import { setErrorMessage } from '../services/stateService';
import ErrorModal from '../ErrorModal';
import AreaLow from './AreaLow';
import AreaHigh from './AreaHigh';
import DateForm from './DateForm';

const pastHours = 10;
const start = moment().subtract(pastHours, 'hours').format();
const end = moment().add(30, 'hours').format();

function Body() {
    const [data, setData] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [searchDate, setSearchDate] = useState({
        start, end, pastHours
    });

    const activePrice = useSelector(state => state.activePrice);
    const dispatch = useDispatch();


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
                dispatch(setErrorMessage(err.toString()));
            });
    }, [searchDate, dispatch]);

    
    const chartsChildren = (
        <>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Line type="monotone" dataKey="price" stroke="#0275d8" />
            <Tooltip />
            <ReferenceLine className="line" x={data?.findIndex(e => e.current)} stroke="red" />
        </>
    )

    return (
        <>
            {activePrice === 'high' ?
                <AreaHigh data={data}>
                    {chartsChildren}
                </AreaHigh>
                :
                <AreaLow {...{ data, searchDate }}>
                    {chartsChildren}
                </AreaLow>
            }
            <div className="text-center">
                <Button className="text-white" variant="warning" onClick={() => setShowForm(true)}>Määra kuupäevad</Button>
            </div>
            <DateForm
                show={showForm}
                setShow={setShowForm}
                setSearchDate={setSearchDate}
            />
            <ErrorModal  />
        </>
    )
}
export default Body;