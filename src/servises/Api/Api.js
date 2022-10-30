import React from 'react';

class Api extends React.Component {

    url = 'https://front-test.dev.aviasales.ru';

    getSearchId = async () => {
        const res = await fetch(`${this.url}/search`)
        const body = await res.json();
        return body.searchId;


    }
    getTickets = async (searchId) => {
        const res = await fetch(`${this.url}/tickets?searchId=${searchId}`);
        const body = await res.json();
        return body.tickets
    }


}

export default Api;