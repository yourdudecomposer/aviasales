import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import Ticket from '../Ticket/Ticket';
import NextButton from '../NextButton/NextButton';
import Loader from '../ui/Loader/Loader';
import searchTickets from '../../actons/actions';

import classes from './TicketList.module.scss';

const getVisebleTickets = (tickets, sort, filters) => {
    const normalizeDataItem = (item, min, max) => (item - min) / (max - min);
    function getFullDuration(ticket) {
        // eslint-disable-next-line
        return ticket?.segments[0].duration + ticket?.segments[1].duration;
    }

    const arrOfPrices = tickets.map((el) => el?.price);
    const arrOfDuration = tickets.map((el) => getFullDuration(el));

    const minPrice = Math.min(...arrOfPrices);
    const maxPrice = Math.max(...arrOfPrices);
    const minDuration = Math.min(...arrOfDuration);
    const maxDuration = Math.max(...arrOfDuration);

    const getSumOfNormalizeData = (ticket) =>
        normalizeDataItem(ticket?.price, minPrice, maxPrice) +
        normalizeDataItem(getFullDuration(ticket), minDuration, maxDuration);

    // console.table(tickets.map(el => {
    //     return {
    //         realPrice: el.price,
    //         realDuration: getFullDuration(el),
    //         normalizePrice: normalizeDataItem(el?.price, minPrice, maxPrice),
    //         normalizeDuration: normalizeDataItem(getFullDuration(el), minDuration, maxDuration),
    //     }
    // }))

    const filtArr = filters.filter((el) => el.checked).map((el) => el.stops);

    let arr = tickets.filter((ticket) => {
        const ticketArr = ticket.segments.map((el) => el.stops.length);
        return ticketArr.every((el) => filtArr.includes(el));
    });

    switch (sort) {
        case 'cheap':
            arr = arr.sort((a, b) => a.price - b.price);
            break;
        case 'fast':
            arr = arr.sort((a, b) => getFullDuration(a) - getFullDuration(b));
            break;
        case 'opt':
            arr = arr.sort(
                (a, b) => getSumOfNormalizeData(a) - getSumOfNormalizeData(b)
            );
            break;
        default:
            arr = [];
    }

    return arr;
};

function TicketList({ tickets, error, loading, sort, filters, dispatch }) {
    const [numOfRenderedTickets, setNumOfRenderedTickets] = useState(5);

    useEffect(() => {
        dispatch(searchTickets());
    }, []);

    if (error && !tickets.length) {
        return <div>Error! {error.message}</div>;
    }

    const loadSign = loading ? <Loader /> : null;

    const visebleTickets = getVisebleTickets(tickets, sort, filters);
    if (visebleTickets.length === 0 && !loading) {
        return (
            <div className={classes['no-find']}>
                Рейсов, подходящих под заданные фильтры, не найдено
            </div>
        );
    }
    return (
        <section className={classes.ticketlist}>
            {loadSign}
            {visebleTickets.splice(0, numOfRenderedTickets).map((el) => (
                <Ticket
                    key={uuidv4()}
                    price={el.price}
                    segments={el.segments}
                    carrier={el.carrier}
                />
            ))}
            {visebleTickets.length > 0 && (
                <NextButton
                    changeNumInSliceMethod={() => {
                        setNumOfRenderedTickets(numOfRenderedTickets + 5);
                    }}
                />
            )}
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
