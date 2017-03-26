
import style from 'main.less';
import fonts from 'common/fonts';

const appContainer = document.getElementById("app");
import global_style from './main';


import React from 'react';
import ReactDom from 'react-dom';
// import Root from './modules/root';


export const counter = (state = 0, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

// import * as Redux from 'redux';
// const store = Redux.createStore(counter);

const createStore = (reducer) => {
    let state;
    const getState = () => state;

    const dispatch = (action) => {
        console.log('dispatch');
        state = reducer(state, action);
        listeners.forEach(l => l());
    };

    let listeners = [];
    const subscribe = (l) => {
        listeners.push(l);
        const removeThisListener = () => {
            listeners = listeners.filter( _l => _l !== l);
        }
        return removeThisListener;
    }

    dispatch({});

    return {
        getState, dispatch, subscribe
    }
}

const store = createStore(counter);

const Counter = (props) => (
    <div>
        <div>{props.value}</div>
        <button onClick={props.increase}>+</button>
        <button onClick={props.decrease}>-</button>
    </div>
    );

const renderView = () => {
    ReactDom.render( (<Counter
        value={store.getState()}
        increase={()=>{store.dispatch({type:'INCREMENT'})}}
        decrease={()=>{store.dispatch({type:'DECREMENT'})}}
    />), appContainer);
    // document.body.innerText = store.getState();
};


renderView();
const removeSubscription = store.subscribe( renderView );





