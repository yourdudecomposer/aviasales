import React, { useState } from 'react';
import { useEffect } from 'react';

import classes from './Checkbox.module.scss'


const Checkbox = ({ label, onFilterChange,id,checked }) => {
  return (
    <label className={classes["checkbox"]}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onFilterChange}
        className={checked ? classes["checked"] : ""}
        id={id}
      />
      <span className={classes['img']}></span>
      <span className={classes['label']}>{label}</span>
    </label>
  );
};

export default Checkbox;