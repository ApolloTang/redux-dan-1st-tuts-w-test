// if (process && process.env && process.env.CONSOLE_LOG) {
//     console.info('log from file: src/modules/module-a/index.js'); // eslint-disable-line no-console
// }

import React, {Component} from 'react';


const counter = (state = 0, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
};

export {counter};

import * as Redux from 'redux';
// console.log('Redux: ', Redux);

const store = Redux.createStore(counter);
// console.log('store content: ', store.getState());


import style from './style.less';
class ModuleRoot extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`reduxLab ${style['module-style']}`} >
                <p> reduxLab </p>
            </div>
        );
    }
}

export default ModuleRoot;


