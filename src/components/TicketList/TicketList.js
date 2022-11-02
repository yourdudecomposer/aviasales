import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import Ticket from '../Ticket/Ticket';
import Api from '../../servises/Api/Api';
import NextButton from '../NextButton/NextButton';

import classes from './TicketList.module.scss';

function TicketList({ tickets, error, loading, sort, filters, dispatch }) {
    const api = new Api();


    useEffect(() => {
        dispatch(async (dispatch) => {
            dispatch({ type: 'FETCH_TICKETS_BEGIN' })
            try {
                const searchId = await api.getSearchId();
                let body
                // do {
                body = await api.getTickets(searchId);
                dispatch({ type: 'FETCH_TICKETS_SUCCESS', tickets: body.tickets })
                // } while (!body.stop)

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

    const visebleTickets = (tickets, sort, filters) => {

        const sortedTicketsByPrice = tickets.sort((a, b) => a.price - b.price);
        const sortedTicketByDuration = tickets.sort((a, b) => getFullDuration(a) - getFullDuration(b));

        const medianPrice = tickets.length % 2 === 0 ?
            (sortedTicketsByPrice[tickets.length / 2]?.price + sortedTicketsByPrice[tickets.length / 2 + 1]?.price) / 2
            : sortedTicketsByPrice[Math.ceil(tickets.length / 2)]?.price

        const medianDuration = tickets.length % 2 === 0 ?
            (getFullDuration(sortedTicketByDuration[tickets.length / 2]) + getFullDuration(sortedTicketByDuration[tickets.length / 2 + 1])) / 2
            : getFullDuration(sortedTicketByDuration[Math.ceil(tickets.length / 2)])
        console.log('medianPrice', medianPrice)
        console.log('medianDuration', medianDuration)
        const filtArr = filters
            .filter((el) => el.checked)
            .map((el) => el.stops)

        console.log('sortedTicketsByPrice', sortedTicketsByPrice)
        console.log('sortedTicketByDuration', sortedTicketByDuration)
        let arr = tickets.filter(ticket => {
            const ticketArr = ticket.segments.map(el => el.stops.length)
            return ticketArr.every(el => filtArr.includes(el))
        })

        function getFullDuration(ticket) {
            return ticket?.segments[0].duration
                + ticket?.segments[1].duration
        }
        switch (sort) {
            case 'cheap':
                arr = arr.sort((a, b) => a.price - b.price);
                break;
            case 'fast':
                arr = arr.sort((a, b) => getFullDuration(a) - getFullDuration(b));
                break;
            case 'opt':
                arr = arr.sort((a, b) => b.price - a.price);
                break;

        }

        return arr;
    }

    return (
        <section className={classes.ticketlist}>
            {visebleTickets(tickets, sort, filters)
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
    filters: state.filters,
});
export default connect(mapStateToProps)(TicketList);
