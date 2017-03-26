
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

import * as Redux from 'redux';

const store = Redux.createStore(counter);
const render = () => {
    document.body.innerText = store.getState();
};
render();
store.subscribe( render );

document.addEventListener('click', ()=>{
    store.dispatch({type:'INCREMENT'})
});



