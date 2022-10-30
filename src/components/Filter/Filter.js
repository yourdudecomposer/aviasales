import classes from './Filter.module.scss'
import React from 'react';
import Checkbox from '../ui/Checkbox/Checkbox';
import { connect } from 'react-redux';

function Filter({ dispatch, filters, filterAll }) {
    const onFilterChange = (e) => {
        dispatch({ type: 'FILTER', id: e.target.id })
    }
    const setAll = () => {
        dispatch({ type: 'FILTER_ALL' })
    }
    return (<section className={classes['filter']}>
        <header>Количество пересадок</header>
        <div className={classes['checkbox-group']}>
            <Checkbox onFilterChange={setAll} id='all' label='Все' checked={filterAll} />
            {filters.map(el => {
                return <Checkbox
                    onFilterChange={onFilterChange}
                    key={el.id}
                    id={el.id}
                    label={el.label}
                    checked={el.checked} />
            })}
        </div>
    </section>);
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        filterAll: state.filterAll,
    }
}
export default connect(mapStateToProps)(Filter);
