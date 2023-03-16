import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// Redux - это обработчик состояния для разных библиотек.
// Основы Redux очень схожи с React состоянием
// Как и у реакт состояния, так и у Redux есть изначальное состояние и функция, меняющая состояние
// Изначальное состояние - объект, в котором хранятся различные свойства/состояния

const initialState = {
    hourRange: 1,
    lowPriceTimestamp: null,
    activePrice: 'low',
    errorMessage: null,
    currentPrice: null,
};

// Функции изменения состояния называются в Redux 'Action'
// Action создает объект, в котором есть его тип и объект payload, в котором будет находится новое состояние.
export const setHourRange = createAction('setHourRange');
export const setLowPriceTimestamp = createAction('setLowPriceTimestamp');
export const setActivePrice = createAction('setActivePrice');
export const setErrorMessage = createAction('setErrorMessage');
export const setCurrentPrice = createAction('setCurrentPrice');


// reducer используется для определения, что будет делать Action при его инициализации
// Мы создаем функции с названием action, в которых меняем состояние
const reducer = createReducer(initialState, {
    [setHourRange]: (state, action) => {
        state.hourRange = action.payload;
    },
    [setLowPriceTimestamp]: (state, action) => {
        state.lowPriceTimestamp = action.payload;
    },
    [setActivePrice]: (state, action) => {
        state.activePrice = action.payload;
    },
    [setErrorMessage] : (state, action) => {
        state.errorMessage = action.payload;
    },
    [setCurrentPrice] : (state, action) => {
        state.currentPrice = action.payload;
    }
});


//store - облако, в котором хранится вся информация по redux состоянию
export const store = configureStore({reducer});