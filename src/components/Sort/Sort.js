import React from 'react';
import { connect } from 'react-redux';

import RadioButton from '../ui/RadioButton/RadioButton';

import classes from './Sort.module.scss';

function Sort({dispatch,sort}) {
    const Sorting = (e) => {
        dispatch({ type: 'SORT', id: e.target.id });
    };

    return (
        <section className={classes.sort}>
            <RadioButton
                Sorting={Sorting}
                value={sort}
                label="Самый дешевый"
                id="cheap"
            />
            <RadioButton
                Sorting={Sorting}
                value={sort}
                label="Самый быстрый"
                id="fast"
            />
            <RadioButton
                Sorting={Sorting}
                value={sort}
                label="Оптимальный"
                id="opt"
            />
        </section>
    );
}
const mapStateToProps = (state) => ({
    sort: state.sort,
});
export default connect(mapStateToProps)(Sort);
