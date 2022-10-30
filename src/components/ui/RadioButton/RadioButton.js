import React from 'react';

import classes from './RadioButton.module.scss'

function RadioButton({Sorting,value,label,id}) {
    return (
        <>
            <input onChange={Sorting} checked={value === id ? true : false} type="radio" name="sort" id={id} />
            <label htmlFor={id}>{label}</label>
        </>
    );
}

export default RadioButton;