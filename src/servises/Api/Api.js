import React from 'react';

class Api extends React.Component {
    url = 'https://aviasales-test-api.kata.academy';
    /* eslint-disable */
    async getSearchId() {
        const res = await fetch(`${this.url}/search`);
        const body = await res.json();
        return body.searchId;
    }

    async getTickets(searchId) {
        const res = await fetch(`${this.url}/tickets?searchId=${searchId}`);
        const body = await res.json();
        return body;
    }
}

export default Api;
