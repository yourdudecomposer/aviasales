import React from 'react';

import classes from './NextButton.module.scss'

function NextButton() {
    return ( 
        <button className={classes['next-btn']}>Показать еще 5 билетов!</button>
     );
}

export default NextButton;