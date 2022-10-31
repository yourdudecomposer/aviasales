import React from 'react';

function RadioButton({ Sorting, value, label, id }) {
    return (
        <>
            <input
                onChange={Sorting}
                checked={value === id}
                type="radio"
                name="sort"
                id={id}
            />
            <label htmlFor={id}>{label}</label>
        </>
    );
}

export default RadioButton;
