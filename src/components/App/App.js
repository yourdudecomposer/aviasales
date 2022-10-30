import React from 'react';
import classes from './App.module.scss';
import Sort from '../Sort/Sort'
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import TicketList from '../TicketList/TicketList'


function App() {
  

  return (
    <div className={classes["wrapper"]}>
      <Header />
      <main className={classes["main"]}>
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
