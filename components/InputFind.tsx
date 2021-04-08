import * as React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {Text, TextProps} from './Themed';
import {getDialog} from "../api/dialog";
import {useState} from "react";
import {findUser} from "../api/users";




export function InputFind(props) {
    const [text, onChangeText] = useState("")

    const onPressSubmit = async () => {
        const res = await findUser(text)
        props.setFriend(res)
        console.log(res)
    }

    return (
        <View style={[styles.block, props.style]}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Поиск"
                maxLength={20}
            />
            <Button
                onPress={() => onPressSubmit()}
                color={"#6e748b"}
                style={styles.button}
                title={"-->"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#d1d2d7",
        paddingHorizontal: 8,
        paddingVertical: 5,
        alignItems: "flex-end",
    },
    input: {
        flex: 1,
        maxHeight: 100,
        textAlignVertical: "top",
    },
    date: {
        fontSize: 20,
        marginRight: 5,
        marginBottom: 6,
    },
    submit: {
        marginHorizontal: 8,
    },
})
