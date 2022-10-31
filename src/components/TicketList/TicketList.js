import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import Ticket from '../Ticket/Ticket';
import Api from '../../servises/Api/Api';
import NextButton from '../NextButton/NextButton';

import classes from './TicketList.module.scss';

function TicketList({ tickets, error, loading, sort, dispatch }) {
    const api = new Api();


    useEffect(() => {
        dispatch(async (dispatch) => {
            dispatch({ type: 'FETCH_TICKETS_BEGIN' })
            try {
                const searchId = await api.getSearchId();
                let body
                do {
                    body = await api.getTickets(searchId);
                    dispatch({ type: 'FETCH_TICKETS_SUCCESS', tickets: body.tickets })
                } while (!body.stop)
                return arr;

            } catch (err) {
                dispatch({ type: 'FETCH_TICKETS_ERROR', error: err })
            }
        })
    }, []);

    if (error && !tickets.length) {
        return <div>Error! {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    const visebleTickets = (tickets, sort) => {
        function getFullDuration(ticket) {
            return ticket.segments[0].duration
                + ticket.segments[1].duration
        }
        switch (sort) {
            case 'cheap':
                return tickets.sort((a, b) => a.price - b.price)
            case 'fast':
                return tickets.sort((a, b) => getFullDuration(b) - getFullDuration(a))
            case 'opt':
                return tickets.sort((a, b) => b.price - a.price)

        }
    }

    return (
        <section className={classes.ticketlist}>
            {visebleTickets(tickets, sort)
                .splice(0, 5)
                .map((el) => (
                    <Ticket
                        key={uuidv4()}
                        price={el.price}
                        segments={el.segments}
                        carrier={el.carrier}
                    />
                ))}
        </section>
    );
}

const mapStateToProps = (state) => ({
    tickets: state.tickets,
    loading: state.loading,
    error: state.error,
    sort: state.sort,
});
export default connect(mapStateToProps)(TicketList);
