import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";

const AreaHigh = ({ rangePrices }) => {
    const [xHigh, setXHigh] = useState(null);

    useEffect(() => {
        if (!rangePrices) return;
        rangePrices.reverse();
        let sum = 0;
        const half = rangePrices.slice(0, rangePrices.length / 2);
        half.forEach(price => {
            sum += price.sum;
        });
        let average = sum / half.length;
        setXHigh(half.filter(v => v.sum > average));

    }, [rangePrices]);


    return xHigh.length ? xHigh.map(x => 
        <ReferenceArea key={x.i} x1={x.i + 10} x2={x.i + 10 + 1} fill="red" fillOpacity={0.10} />
    ) : null;
}

export default AreaHigh;