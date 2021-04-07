import {setModal} from "../redux/data/actions";
import {store} from "../App";
import {dbStore} from "../store";
import jwtDecode from "jwt-decode";


export const newDialog = async (phone: string, password: string | number, first_name: string, last_name: string) => {
  const data = await fetch(`http://192.168.43.145:7000/api/dialog`, {
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
