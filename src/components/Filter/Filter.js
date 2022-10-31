import React from 'react';
import { connect } from 'react-redux';

import Checkbox from '../ui/Checkbox/Checkbox';

import classes from './Filter.module.scss';

function Filter({ dispatch, filters, filterAll }) {
    const onFilterChange = (e) => {
        dispatch({ type: 'FILTER', id: e.target.id });
    };
    const setAll = () => {
        dispatch({ type: 'FILTER_ALL' });
    };
    return (
        <section className={classes.filter}>
            <header>Количество пересадок</header>
            <div className={classes['checkbox-group']}>
                <Checkbox
                    onFilterChange={setAll}
                    id="all"
                    label="Все"
                    checked={filterAll}
                />
                {filters.map((el) => (
                    <Checkbox
                        onFilterChange={onFilterChange}
                        key={el.id}
                        id={el.id}
                        label={el.label}
                        checked={el.checked}
                    />
                ))}
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    filters: state.filters,
    filterAll: state.filterAll,
});
export default connect(mapStateToProps)(Filter);
