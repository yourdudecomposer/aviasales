import classes from './TicketList.module.scss'
import React from 'react';
import Ticket from '../Ticket/Ticket';

function TicketList() {
    return ( 
        <section className={classes['ticketlist']}>
            <Ticket/>
            <Ticket/>
            <Ticket/>
        </section>
     );
}

export default TicketList;