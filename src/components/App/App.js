import React from 'react';

import Sort from '../Sort/Sort';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import TicketList from '../TicketList/TicketList';

import classes from './App.module.scss';

function App() {
    return (
        <div className={classes.wrapper}>
            <Header />
            <main className={classes.main}>
                <Filter />
                <div>
                    <Sort />
                    <TicketList />
                </div>
            </main>
        </div>
    );
}

export default App;
