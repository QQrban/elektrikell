import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/stateService';
import App from './App';


// ReactDOM - это вспомогательный пакет реакта для работы с DOM
// ReatDOM - это мост между реактом и browser DOM
// Элемпент div root оборачивается реактом
// Затем все приложение отрисовывается (render) в элементе #root
const root = ReactDOM.createRoot(document.getElementById('root'));


//Для того, чтобы использовать redux состояние в реакт, мы используем дополнительную библиотеку react-redux
//С React-redux мы берем компонент Provider и передаем ему весь наш redux и этот компонент должен обернуть весь проект


// Для имитирования multipage application в реакте используется react-router-dom
// Поскольку React - singlepage application, то, чтобы работали ссылки и не перезапускалось все приложение, 
// нужно обернуть приложение в BrowserRouter компонент от react-router-dom
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);