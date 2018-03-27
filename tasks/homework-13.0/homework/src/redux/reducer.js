const initState = {};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'User':
            return {name: action.payload.user.name,position: action.payload.user.position};
        default:
            return state;
    }
};

export default  rootReducer;