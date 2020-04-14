const initialState = {
    isLoad: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "APP_LOAD":
            return {
                isLoad: true,
            };
        default:
            return state;
    }
};

export default reducer;
