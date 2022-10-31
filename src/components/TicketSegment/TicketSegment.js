import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import classes from './TicketSegment.module.scss';

function TicketSegment({ segment }) {
    const { origin, destination, duration, stops, date } = segment;

    const timeUp = new Date(date);
    const timeDown = new Date(date);
    timeDown.setMinutes(timeDown.getMinutes() + duration);

    const setTime = (time) =>
        `${time.getHours().toString().padStart(2, 0)}:${time
            .getMinutes()
            .toString()
            .padStart(2, 0)}`;

    const makeTransferStr = (stop) => {
        switch (stop.length) {
            case 0:
                return 'без пересадок';
            case 1:
                return '1 пересадка';

            case 2:
            case 3:
            case 4:
                return `${stop.length} пересадки`;

            default:
                return `${stop.length} пересадок`;
        }
    };
    return (
        <section className={classes.segment}>
            <dl className={classes.schedule}>
                <dt>
                    <span>{origin}</span> - <span>{destination}</span>
                </dt>
                <dd>
                    {setTime(timeUp)} – {setTime(timeDown)}
                </dd>
            </dl>
            <dl className={classes.time}>
                <dt>В пути</dt>
                <dd>
                    {Math.floor(duration / 60)}ч {duration % 60}м
                </dd>
            </dl>
            <dl className={classes.transfer}>
                <dt>{makeTransferStr(stops)}</dt>
                <dd>
                    {stops.map((el, ind) => (
                        <span key={uuidv4()}>
                            {ind !== stops.length - 1 ? `${el}, ` : el}
                        </span>
                    ))}
                </dd>
            </dl>
        </section>
    );
}

export default TicketSegment;
