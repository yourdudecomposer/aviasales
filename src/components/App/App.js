import { useEffect } from 'react';
import Api from '../../servises/Api/Api';
import classes from './App.module.scss';
import Sort from '../Sort/Sort'
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import TicketList from '../TicketList/TicketList'


function App() {
  const api = new Api()

  const initApplication = async () => {
    const searchId = await api.getSearchId();
    const tickets = await api.getTickets(searchId)
    // console.log(tickets)
  }

  useEffect(() => {
    initApplication()
  })

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
