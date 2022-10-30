import React from 'react';
import classes from './TicketSegment.module.scss'
import { v4 as uuidv4 } from 'uuid';

function TicketSegment({ segment }) {
    const { origin, destination, duration, stops, date } = segment;

    const timeUp = new Date(date);
    const timeDown = new Date(date);
    timeDown.setMinutes(timeDown.getMinutes() + duration)

    const setTime = (date) => {
        return `${date.getHours().toString().padStart(2, 0)}:${date.getMinutes().toString().padStart(2, 0)}`
    }

    const makeTransferStr = (stops) => {
        switch (stops.length) {
            case 0:
                return 'без пересадок';
            case 1:
                return '1 пересадка';

            case 2:
            case 3:
            case 4:
                return `${stops.length} пересадки`;

            default:
                return `${stops.length} пересадок`;
        }
    }
    return (<section className={classes['segment']} >
        <dl className={classes['schedule']}>
            <dt>
                <span>{origin}</span> - <span>{destination}</span>
            </dt>
            <dd>{setTime(timeUp)} – {setTime(timeDown)}</dd>
        </dl>
        <dl className={classes['time']}>
            <dt>В пути</dt>
            <dd>{Math.floor(duration / 60)}ч {duration % 60}м</dd>
        </dl>
        <dl className={classes['transfer']}>
            <dt>{makeTransferStr(stops)}</dt>
            <dd>{stops.map((el, ind) => <span key={uuidv4()}>{ind !== stops.length - 1 ? el + ', ' : el}</span>)}</dd>
        </dl>
    </section>
    );
}

export default TicketSegment;