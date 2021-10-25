const InitialReducerState = { bill: 0, tip:0, numPeople: 0 };

function MyReducer(state, action) {
    switch (action.type) {
        case 'setBill':
            return { ...state, bill: action.value };
        case 'setTip':
            return { ...state, tip: action.value };
        case 'setPeopleCount':
            return { ...state, numPeople: action.value };
        default:
            throw new Error();
    }
}

export {MyReducer, InitialReducerState};