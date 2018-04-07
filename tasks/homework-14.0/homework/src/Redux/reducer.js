const initState = {};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'NewProject':
            return {name: action.payload.project.name};
        default:
            return state;
    }
};

export default  rootReducer;