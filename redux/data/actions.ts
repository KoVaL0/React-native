import {
    SET_MODAL
} from "./actionTypes";

export const setModal = (inputData: boolean) => ({
    type: SET_MODAL,
    payload: {
        data: inputData,
    },
});


