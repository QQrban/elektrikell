import { useState, useEffect } from "react";
import { LineChart, CartesianGrid, XAxis, Tooltip, YAxis, Legend, Line, ResponsiveContainer } from "recharts";
import { getPriceData } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import moment from "moment";

function Body() {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        getPriceData()
            .then(({ data, success, messages }) => {
                if (!success) {
                    throw messages[0];
                }
                const newData = data.ee.map(d => {

                    return {
                        price: d.price,
                        hour: moment.unix(d.timestamp).hours()
                    }

                });
                setData(newData)
            })
            .catch(err => {
                setErrorMessage(err.toString());
            });
    }, []);

    return (
        <>
            <ResponsiveContainer width="95%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
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