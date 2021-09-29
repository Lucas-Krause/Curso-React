import { alterarMax, alterarMin } from "../actions/actionTypes";

const initialState = {
    min: 1,
    max: 10
}

export default function(state = initialState, action) {
    switch (action.type) {
        case alterarMin:
            return {
                ...state,
                min: action.payload
            };
        case alterarMax:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state;
    }
}