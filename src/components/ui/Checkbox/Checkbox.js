import React from 'react';

import classes from './Checkbox.module.scss';

function Checkbox({ label, onFilterChange, id, checked }) {
    return (
        <label htmlFor={id} className={classes.checkbox}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onFilterChange}
                className={checked ? classes.checked : ''}
                id={id}
            />
            <span className={classes.img} />
            <span className={classes.label}>{label}</span>
        </label>
    );
}

export default Checkbox;
