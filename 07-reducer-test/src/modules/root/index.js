
import React, {Component} from 'react';
import ReducerTest from 'modules/reducer-test';

import style from './style';
class Root extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        return(
            <div className={style['module-style']}>
                <p>Root Component</p>
                <ReducerTest />
            </div>
        )
    }
}

export default Root;



