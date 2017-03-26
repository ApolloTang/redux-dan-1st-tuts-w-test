
import style from 'main.less';
import fonts from 'common/fonts';

const appContainer = document.getElementById("app");
import global_style from './main';


// import React from 'react';
// import {render} from 'react-dom';
// import Root from './modules/root';
// render( <Root />, appContainer);


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

const render = () => {
    document.body.innerText = store.getState();
};

render();
const removeSubscription = store.subscribe( render );

// remove subsciption after 3min
setTimeout( removeSubscription, 3000);

document.addEventListener('click', ()=>{
    store.dispatch({type:'INCREMENT'})
});



