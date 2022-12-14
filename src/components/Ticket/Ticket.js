import React from 'react';

import TicketSegment from '../TicketSegment/TicketSegment';

import classes from './Ticket.module.scss';

function Ticket({ price, segments, carrier }) {
    return (
        <section className={classes.ticket}>
            <header>
                <p>{price.toLocaleString()} p</p>
                <img
                    src={`https://daisycon.io/images/airline/?width=100&height=36&color=ffffff&iata=${carrier}`}
                    alt="logo"
                />
            </header>
            <article className={classes.segments}>
                <TicketSegment segment={segments[0]} />
                <TicketSegment segment={segments[1]} />
            </article>
        </section>
    );
}

export default Ticket;
