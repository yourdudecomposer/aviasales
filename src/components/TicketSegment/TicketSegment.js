import React from 'react';
import classes from './TicketSegment.module.scss'

function TicketSegment() {
    return (<section className={classes['segment']} >
        <dl className={classes['schedule']}>
            <dt>
                <span>MOV</span> - <span>HKT</span>
            </dt>
            <dd>10:45 – 08:00</dd>
        </dl>
        <dl className={classes['time']}>
            <dt>В пути</dt>
            <dd>21ч 15м</dd>
        </dl>
        <dl className={classes['transfer']}>
            <dt> 2 пересадки </dt>
            <dd><span>HKG</span>, <span>JNB</span></dd>
        </dl>
    </section>
    );
}

export default TicketSegment;