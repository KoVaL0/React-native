import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import {check, getUser} from "./api/users";
import Registration from "./screens/Registration";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const [menu,setMenu] = useState(store.getState().data.modal)

    store.subscribe(()=>{
        setMenu(store.getState().data.modal)
    })

    const handlerModalClick = () => {
        store.dispatch(setModal(!menu))
    }

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <MenuModal visible={menu} handlerModalClick={handlerModalClick}/>
                    <Navigation colorScheme={colorScheme}/>
                    <StatusBar/>
                </SafeAreaProvider>
            </Provider>
        );
    }
}
