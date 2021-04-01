import {setModal} from "../redux/data/actions";
import {store} from "../App";
import {dbStore} from "../store";


export const getUser = (id: number) => {
  return dbStore.users[id].user1.profile
}
