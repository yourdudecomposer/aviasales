const initialState = {
    sort: 'cheap',
    filters: [
        { id: 'no transfers', label: 'Без пересадок', checked: false },
        { id: '1 transfers', label: '1 пересадка', checked: false },
        { id: '2 transfers', label: '2 пересадки', checked: false },
        { id: '3 transfers', label: '3 пересадки', checked: false },
    ],
    filterAll: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SORT':
            return {
                ...state,
                sort: action.id,
            }
        case 'FILTER':
            {

                const newArray = state.filters.map(el => {
                    if (el.id === action.id) {
                        el.checked = !el.checked;
                        return el;
                    } else return el
                })
                const isFilterAllCheck = newArray.every(el => el.checked)
                return {
                    ...state,
                    filters: newArray,
                    filterAll: isFilterAllCheck,
                }
            }

        case 'FILTER_ALL':
            {
                const isFilterAllCheck = !state.filterAll;
                const newArray = state.filters.map(el => {
                    el.checked = isFilterAllCheck;
                    return el;
                }
                )
                return {
                    ...state,
                    filters: newArray,
                    filterAll: isFilterAllCheck,
                }
            }

        default:
            return state;
    }
}

export default reducer;