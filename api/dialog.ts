import {setModal} from "../redux/data/actions";
import {store} from "../App";
import {dbStore} from "../store";


export const getDialog = (id: number) => {
  return dbStore.users[0].user1.messages[id]
}
