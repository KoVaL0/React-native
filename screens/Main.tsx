import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {ChatBlock} from "../components/ChatBlock";
import {store} from "../App";
import {useState} from "react";
import {MenuModal} from "../components/MenuModal";
import {setDialogId, setModal} from "../redux/data/actions";

export default function Main(props: any) {
    const [state,setState] = useState(store.getState())
    store.subscribe(()=>{
        setState(store.getState())
    })
    const handlerDialogsClick = (id: number) => {
        props.navigation.push('Dialogs')
        store.dispatch(setDialogId(id))
    }

    return (
        <View style={styles.container}>
            <ChatBlock
                style={styles.chat}
                img={"https://xakep.ru/wp-content/uploads/2013/12/085647.jpg"}
                name={"Дмитрий"}
                date={"23:42"}
                message={"Привет! Как ты там?"}
                onClick={() => handlerDialogsClick(0)}
            />
            <ChatBlock
                style={styles.chat}
                img={"https://vraki.net/sites/default/files/inline/images/30_55.jpg"}
                name={"Александр"}
                date={"13:23"}
                message={"Саня, верни сотку!"}
                onClick={() => handlerDialogsClick(1)}
            />
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    chat: {
        marginVertical: 4,
    },
});
