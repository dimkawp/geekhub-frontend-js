const initState = {};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'User':
            return {name: action.payload.user.name,position: action.payload.user.position, avatarUrl: action.payload.user.avatarUrl};
        case 'Auth':
            return {token: action.payload.auth.token};
        default:
            return state;
    }
};

export default  rootReducer;