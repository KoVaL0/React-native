import axios from "axios";
import {$host} from "./index.js";

export const getMessage = async () => {
    const {data} = await $host.get('api/message')
    console.log(await $host.get('api/message'))
    return data
}

export const createMessage = async (uid: number, date: number, content: any, read_state: boolean) => {
    const response = await $host.post('api/auth/registration', {uid, date, content, read_state})
    return response
}
