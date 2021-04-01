import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {View} from '../components/Themed';
import {useEffect, useState} from "react";
import {SelfMessage} from "../components/SelfMessage";
import {getDialog} from "../api/dialog";
import {store} from "../App";
import {InputMessage} from "../components/InputMessage";

export default function Dialogs(props: any) {
    const [dialog, setDialog] = useState(getDialog(store.getState().data.dialogId || 0))
    const [user] = useState(store.getState().data.user)
    const [text, onChangeText] = React.useState("");

    const onPressSubmit = () => {
        setDialog((prev: any) => {
            const message = {
                "date": Date.now(),
                "id": prev.message.length,
                "read_state": 0,
                "text": text,
                "uid": user.uid
            }
            return {...
                prev, message: prev.message.concat(message)
            }
        })
        onChangeText("")
    }

    const renderItem = ({item}: any) => {
        return (
            (user.uid === item.uid) ?
                <View style={styles.selfContainer}>
                    <SelfMessage
                        style={styles.chat}
                        date={item.date}
                        message={item.text}
                    />
                </View>
                :
                <View style={styles.friendMessage}>
                    <SelfMessage
                        style={styles.friendChat}
                        date={item.date}
                        message={item.text}
                    />
                </View>
        )
    }

    return (
        <React.Fragment>
            <View style={styles.container}>
                <FlatList
                    data={dialog.message}
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
