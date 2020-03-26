import { AnyAction } from "redux";

export default (state = {}, action: AnyAction) => {
    switch (action.type) {
        case "FETCH_USER":
            return ({ ...state, users: action.payload});
        case "UPDATE_USERNAME":
            return({ ...state, name: action.payload});
        default:
            return state;
    }
};