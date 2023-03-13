import { useState, useEffect } from "react";
import { ReferenceArea, LineChart, ResponsiveContainer } from "recharts";
import { rangePricesGenerator } from "../helpers/rangePrices";

const AreaHigh = ({ data, children }) => {
    const [xHigh, setXHigh] = useState(null);
    const currentIndex = data?.findIndex(e => e.current);
    
    
    useEffect(() => {
        document.querySelector('body').classList.add('high');
        if (!data) return;

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
    
    
    return (
        <ResponsiveContainer width="95%" height={400}>
        <LineChart data={data}>
            {children}
            {xHigh?.length ? xHigh.map(x =>
        <ReferenceArea 
            key={x.i} 
            x1={x.i + currentIndex} 
            x2={x.i + currentIndex + 1} 
            fill="red" 
            fillOpacity={0.10} />
    ) : null}
        </LineChart>
    </ResponsiveContainer>
    )
}

export default AreaHigh;