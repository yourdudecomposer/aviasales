import classes from './TicketList.module.scss'
import React, { useEffect } from 'react';
import Ticket from '../Ticket/Ticket';
import Api from '../../servises/Api/Api';
import { v4 as uuidv4 } from 'uuid';
import NextButton from '../NextButton/NextButton';

import { connect } from 'react-redux';

function TicketList({ tickets, dispatch }) {

    const api = new Api()
    const ticketsVis = tickets.splice(0, 5)
    const initSearch = async () => {
        const searchId = await api.getSearchId();
        let body = await api.getTickets(searchId);
       const loadedTickets = [];
       loadedTickets.push(...body.tickets)
       do {
         body = await api.getTickets(searchId);
         loadedTickets.push(...body.tickets)
       } while (!body.stop) 
return loadedTickets;
    }

    useEffect(() => {
        initSearch().then(res=>dispatch({ type: 'FETCH_POSTS_SUCCESS', loadedTickets: res }))
    }, [])

    return (
        <section className={classes['ticketlist']}>
            {tickets.map(el => {
                return <Ticket
                    key={uuidv4()}
                    price={el.price}
                    segments={el.segments}
                    carrier={el.carrier}
                />
            })}
            {tickets.length > 5 ? <NextButton /> : null}
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}
export default connect(mapStateToProps)(TicketList); 