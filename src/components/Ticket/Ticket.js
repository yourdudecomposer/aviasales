import classes from './Ticket.module.scss';
import React from 'react';
import TicketSegment from '../TicketSegment/TicketSegment';
import logo from '../../assets/img/airlines.png'
function Ticket() {
    return (<section className={classes['ticket']}>
        <header>
            <p>13 400 p</p>
            <img src={logo} alt="" />
        </header>
        <article className={classes['segments']}>
            <TicketSegment/>
            <TicketSegment/>
        </article >
    </section >);
}

export default Ticket;