import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Elektrikell from './ElektriKell';
import NavBar from './Header/NavBar';

// Компоненты - обычные JavaScript функции, которые возвращают React element.
// Названия компонентов должно начинаться с заглавной буквы (Component).
// Для того, чтобы различать компонент от html тега в JSX

// JSX - это новый синтаксис кода от ReactJS, который позволяет писать html и JavaScript вместе.
// Компоненты должны возвращать только один реакт элемент, написанный, благодаря JSX
const App = () => {

    // Каждый компонент Route отвечает за какую-нибудь ссылку
    // В Route передается property path, которая определяет ссылку, по которой он инициализирует компонент
    // В элемент property мы передаем тот же самые компонент.


    // Так же можно передать данные в ссылки в компонент
    // ':' в path означают, что мы возьмем все, что написано после "/" и передадим в переменную, название которого мы определили после ":"
    // В нашем случае https://localhost:3000/low/6 означает, что мы хотим видеть компонент <Elektrikell /> с параметром duration: 6
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Elektrikell />} />
                <Route path="/:activePrice" element={<Elektrikell />} />
                <Route path="/low/:hour" element={<Elektrikell />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default App