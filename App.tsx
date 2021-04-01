import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/index";
import {composeWithDevTools} from "redux-devtools-extension";
import {MenuModal} from "./components/MenuModal";
import {setModal, setUser} from "./redux/data/actions";
import {getUser} from "./api/users";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    const [menu,setMenu] = useState(store.getState().data.modal)
    store.subscribe(()=>{
        setMenu(store.getState().data.modal)
    })
    useEffect(() => {
        store.dispatch(setUser(getUser(0)))
    }, [])


    const handlerModalClick = () => {
        store.dispatch(setModal(!menu))
    }

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    {menu ? <MenuModal handlerModalClick={handlerModalClick}/> : null}
                    <Navigation colorScheme={colorScheme}/>
                    <StatusBar/>
                </SafeAreaProvider>
            </Provider>
        );
    }
}
