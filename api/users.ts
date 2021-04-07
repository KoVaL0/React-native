import {setModal} from "../redux/data/actions";
import {store} from "../App";
import uuid from 'react-native-uuid';
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registration = async (phone: string, password: string | number, first_name: string, last_name: string) => {
    const data = await fetch(`http://192.168.43.145:7000/api/user/registration`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({phone, password, first_name, last_name})
    })
    const result = await data.json()
    if (result.message) {
        console.log("Error", result.message)
    }
    return jwtDecode(result.token)
}

export const login = async (phone: number, password: string) => {
    const data = await fetch('http://192.168.43.145:7000/api/user/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({phone, password})
    })
    const result = await data.json()
    if (result.message) {
        console.log("Error", result.message)
    }
    await AsyncStorage.setItem('@User', result.token)
    return jwtDecode(result.token)
}

export const check = async (token: string) => {
    const result = await fetch('http://192.168.43.145:7000/api/user/check')
    if (token === await result.token) {
        return jwtDecode(token)
    }
}

export const findUser = async (phone: string) => {
    const data = await fetch('http://192.168.43.145:7000/api/user/find', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({phone})
    })
    console.log(await data)
}
