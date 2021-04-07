import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {View} from '../components/Themed';
import {useEffect, useState} from "react";
import {SelfMessage} from "../components/SelfMessage";
import {getDialog} from "../api/dialog";
import {store} from "../App";
import {InputMessage} from "../components/InputMessage";
import {createMessage, getMessage} from "../api/message";
import {LoadMessage} from "../components/LoadMessage";

export default function Dialogs(props: any) {
    const [dialog, setDialog] = useState()
    const [user] = useState(store.getState().data.user)
    const [text, onChangeText] = useState("");
    const hostUrl = process.env.REACT_APP_API_URL

    const getMessage = async () => {
        await fetch(`http://192.168.43.145:7000/api/message`)
            .then(res => res.json())
            .then(json => setDialog(json))
            .catch(e => console.log(e))
    }

    const createMessage = () => {
        const message = {
            id: dialog.length + 1 ,
            uid: user.id,
            content: text,
            read_state: 0
        }
        setDialog(prev => prev.concat(message))
        fetch(`http://192.168.43.145:7000/api/message`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...message, date: Date.now()})
        })
            .then(() => {})
            .catch(e => console.log(e))
    }

    const onPressSubmit = async () => {
        if (text.trim()) {
            await createMessage()
            getMessage()
            onChangeText("")
        }
    }

    useEffect(() => {
        getMessage()
    }, [])

    const renderItem = ({item}: any) => {
        return (
            (user.id === item.uid) ?
                <View style={styles.selfContainer}>
                    <SelfMessage
                        style={styles.chat}
                        date={item.date}
                        message={item.content}
                    />
                </View>
                :
                <View style={styles.friendMessage}>
                    <SelfMessage
                        style={styles.friendChat}
                        date={item.date}
                        message={item.content}
                    />
                </View>
        )
    }

    return (
        <React.Fragment>
            <View style={styles.container}>
                <FlatList
                    data={dialog}
                    style={styles.flatList}
                    keyExtractor={(item => item.id.toString())}
                    renderItem={renderItem}
                    inverted={true}
                />
            </View>
            <InputMessage text={text} onChangeText={onChangeText} onPressSubmit={() => onPressSubmit()}/>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        padding: 20,
    },
    flatList: {
        display: "flex",
    },
    selfContainer: {
        alignItems: 'flex-end',
    },
    friendMessage: {
        alignItems: 'flex-start',
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
        maxWidth: "80%",
    },
    friendChat: {
        marginVertical: 4,
        maxWidth: "80%",
        backgroundColor: "#94969a",
    },
});
