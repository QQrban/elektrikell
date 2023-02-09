import React, { useState } from 'react';

export function FComponent({firstName, lastName, age}) {
    return(
        <div>
            First name: {firstName}<br/>
            Last name: {lastName}<br/>
            Age: {age}
        </div>
    );
}

FComponent.defaultProps = {
    firstName: 'Greta',
    lastName: 'Thunberg',
    age: 20,
}

export const CComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Plus</button>
            <InnerComponent setCount={setCount} count={count} component={<ClassComponent />}>
                <div>Child</div>
            </InnerComponent>
        </div>
    );
}

function InnerComponent({ setCount, count, component, children }) {
    if (component) console.log('Privet');
        return (
        <div>
            <button onClick={() => setCount(count - 1)}>Minus</button> <br/>
            {component && (<>Yo!</>)}
            {children}
        </div>
    )
}

export class ClassComponent extends React.Component {
    render() {
        return (
            <div>ClassComponent</div>
        );
    }
}

export const ImgComponent = () => {
    const [show, setShow] = useState(false)
    return(
        <>
                <button onClick={() => setShow(true)}>Show</button> 
                <InnerImgComponent  show={show} setShow={setShow}/>
        </>
    )
}

const ChildComponent = () => <img src='https://assets.stickpng.com/thumbs/5ee772d099588c0004aa684b.png'></img>

function InnerImgComponent({show, setShow}) {
    return (
        <>
            {show && <img src='https://assets.stickpng.com/thumbs/5ee772d099588c0004aa684b.png'></img>}
            {show ? <ChildComponent/> : ''}
            <button onClick={() => setShow(false)}>Hide</button> 
            
        </>
    )
}