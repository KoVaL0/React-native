import {
    SET_DIALOG_ID,
    SET_MODAL, SET_USER
} from "./actionTypes";

export const setModal = (inputData: boolean) => ({
    type: SET_MODAL,
    payload: {
        data: inputData,
    },
});

export const setUser = (inputData: object) => ({
    type: SET_USER,
    payload: {
        data: inputData,
    },
});

export const setDialogId = (inputData: number) => ({
    type: SET_DIALOG_ID,
    payload: {
        data: inputData,
    },
});



