import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text, TextProps} from './Themed';
import {getDialog} from "../api/dialog";

type ChatType = {
    message: string,
}

export function LoadMessage(props: TextProps & ChatType) {

    return (
        <View style={[styles.block, props.style]}>
            <Text style={styles.message}>{props.message}</Text>
            <Text style={styles.date}>--:--</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        display: "flex",
        backgroundColor: "#789ee2",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
        minHeight: 24,
        alignItems: "flex-end",
    },
    date: {
        fontSize: 12,
        alignSelf: "flex-end",
    },
    message: {
        fontSize: 14,
        alignItems: "flex-end",
    },
})
