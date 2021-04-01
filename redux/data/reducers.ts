import {
    SET_DIALOG_ID,
    SET_MODAL, SET_USER,
} from "./actionTypes";

const initialState = {
    modal: false,
    user: null,
    dialogId: null,
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
                ...state,
                modal: action.payload.data,
            };
        }
        case SET_USER: {
            return {
                ...state,
                user: action.payload.data,
            };
        }
        case SET_DIALOG_ID: {
            return {
                ...state,
                dialogId: action.payload.data,
            };
        }
        default: {
            return state;
        }
    }
};
