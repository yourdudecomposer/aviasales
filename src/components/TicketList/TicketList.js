import classes from './TicketList.module.scss'
import React, { useEffect } from 'react';
import Ticket from '../Ticket/Ticket';
import Api from '../../servises/Api/Api';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';

function TicketList({ tickets, dispatch }) {

    const api = new Api()

    const initSearch = async () => {
        const searchId = await api.getSearchId();
        const loadedTickets = await api.getTickets(searchId);
        dispatch({ type: 'FETCH_POSTS_SUCCESS', loadedTickets })
    }

    useEffect(() => {
        initSearch()
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
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}
export default connect(mapStateToProps)(TicketList); 