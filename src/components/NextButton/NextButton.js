import React from 'react';

import classes from './NextButton.module.scss';

function NextButton({ changeNumInSliceMethod }) {
    return (
        <button
            onClick={changeNumInSliceMethod}
            type="button"
            className={classes['next-btn']}
        >
            Показать еще 5 билетов!
        </button>
    );
}

export default NextButton;
