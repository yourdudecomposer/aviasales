import Api from '../servises/Api/Api';

const api = new Api();

export default function searchTickets() {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_TICKETS_BEGIN' });
        try {
            const searchId = await api.getSearchId();
            let body;
            do {
                /* eslint-disable */
                body = await api.getTickets(searchId);
                dispatch({
                    type: 'FETCH_TICKETS_SUCCESS',
                    tickets: body.tickets,
                });
            } while (!body.stop);
            dispatch({ type: 'FETCH_TICKETS_DONE' });
        } catch (err) {
            dispatch({ type: 'FETCH_TICKETS_ERROR', error: err });
        }
    };
}
