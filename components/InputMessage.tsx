import * as React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {Text, TextProps} from './Themed';
import {getDialog} from "../api/dialog";

type ChatType = {
    onPressSubmit: any,
    onChangeText: any,
    text: string,
}


export function InputMessage(props: TextProps & ChatType) {
    return (
        <View style={[styles.block, props.style]}>
            <Text style={styles.date}>@</Text>
            <TextInput
                style={styles.input}
                onChangeText={props.onChangeText}
                value={props.text}
                placeholder="Сообщение"
                maxLength={999}
                multiline={true}
            />
            <Button
                onPress={() => {props.onPressSubmit()}}
                color={"#6e748b"}
                style={styles.button}
                title={"-->"} />
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
