import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";
import { rangePricesGenerator } from "../helpers/rangePrices";

const AreaHigh = ({ data }) => {
    const [xHigh, setXHigh] = useState(null);
    document.querySelector('body').classList.add('high')

    useEffect(() => {
        if (!data.length) return;

        const rangePrices = rangePricesGenerator(data)
        rangePrices.reverse();
        let sum = 0;
        const half = rangePrices.slice(0, rangePrices.length / 2);
        half.forEach(price => {
            sum += price.sum;
        });
        let average = sum / half.length;
        setXHigh(half.filter(v => v.sum > average));

    }, [data]);


    return xHigh.length ? xHigh.map(x =>
        <ReferenceArea key={x.i} x1={x.i + 10} x2={x.i + 10 + 1} fill="red" fillOpacity={0.10} />
    ) : null;
}

export default AreaHigh;