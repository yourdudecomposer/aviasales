const initialState = {
    sort: 'cheap',
    filterAll: true,
    filters: [
        { id: 'no transfers', label: 'Без пересадок', checked: true },
        { id: '1 transfers', label: '1 пересадка', checked: true },
        { id: '2 transfers', label: '2 пересадки', checked: true },
        { id: '3 transfers', label: '3 пересадки', checked: true },
    ],
    tickets: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SORT':
            return {
                ...state,
                sort: action.id,
            };
        case 'FILTER': {
            const newArray = state.filters.map((el) => {
                if (el.id === action.id) {
                    el.checked = !el.checked;
                    return el;
                }
                return el;
            });
            const isFilterAllCheck = newArray.every((el) => el.checked);
            return {
                ...state,
                filters: newArray,
                filterAll: isFilterAllCheck,
            };
        }

        case 'FILTER_ALL': {
            const isFilterAllCheck = !state.filterAll;
            const newArray = state.filters.map((el) => {
                el.checked = isFilterAllCheck;
                return el;
            });
            return {
                ...state,
                filters: newArray,
                filterAll: isFilterAllCheck,
            };
        }
        case 'FETCH_TICKETS_SUCCESS': {
            return {
                ...state,
                loading: false,
                tickets:[...state.tickets,...action.tickets],
            };
        }
        case 'FETCH_TICKETS_BEGIN': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'FETCH_TICKETS_ERROR': {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }

        default:
            return state;
    }
};

export default reducer;
