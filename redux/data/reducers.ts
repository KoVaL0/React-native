import {
    SET_MODAL,
} from "./actionTypes";

const initialState = {
    modal: false,
};

type Action = {
    type: string,
    payload: {
        data: any
    }
}

export const dataReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_MODAL: {
            return {
                modal: action.payload.data,
            };
        }
        default: {
            return state;
        }
    }
};
