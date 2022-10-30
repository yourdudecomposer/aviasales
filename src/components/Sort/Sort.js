import React, { useState } from 'react';
import RadioButton from '../ui/RadioButton/RadioButton';
import classes from './Sort.module.scss';
import { connect } from 'react-redux';

function Sort(props) {
    const Sorting = (e) => {
        props.dispatch({ type: "SORT", id: e.target.id });
    }

    return (
        <section className={classes['sort']}>
            <RadioButton Sorting={Sorting} value={props.sort} label='Самый дешевый' id="cheap" />
            <RadioButton Sorting={Sorting} value={props.sort} label='Самый быстрый' id="fast" />
            <RadioButton Sorting={Sorting} value={props.sort} label='Оптимальный' id="opt" />
        </section>


    );
}
const mapStateToProps = (state) => {
    return {
        sort: state.sort
    }
}
export default connect(mapStateToProps)(Sort);