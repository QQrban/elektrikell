import { useState, useEffect } from 'react';
import { ReferenceArea, LineChart, ResponsiveContainer } from 'recharts';
import { rangePricesGenerator } from '../helpers/rangePrices';


// Компоненты могут принимать properties/property (props)
// Props передается компоненту так же, как и свойства html элементу
// Properties могут быть любым типом данных
// Каждая property, переданная компоненту, собирается в один объект
// Компонент принимает только один аргумент и принято его называть 'props'

const AreaHigh = ({ data, children }) => {
    // useState - реакт hook, который позволяет работать с состоянием компонента.
    // Состояние - переменная, которая держит в себе любой тип данных, который касается только этого компонента
    // useState принимает, как аргумент изначальное состояне, т.е при первой отрисовке компонента назначится
    // переменная с этим изначальным значением
    // useState при инициализации возвращает массив из двух элементов
    // [0] - изначальное состояние
    // [1] - функция, которая меняет значение состояния. В начало названия обычно добавляем set
    // При инициализации изменения состояния запускается новая отрисовка компонента
    // Все хуки реакта начинаются со слова use и все они воздействуют на отрисовку компонента
    const [xHigh, setXHigh] = useState(null);
    const currentIndex = data?.findIndex(e => e.current)
    
    useEffect(() => {
        document.querySelector('body').classList.add('high');
        document.querySelector('.navbar').classList.add('high');
        document.querySelector('.navbar').classList.remove('low');

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