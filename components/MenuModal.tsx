import * as React from 'react';
import {StyleSheet, Modal, Alert, View, Pressable} from 'react-native';
import {Text} from "./Themed";
import {store} from "../App";
import {setModal} from "../redux/data/actions";
import {useState} from "react";
import {Avatar} from "./Avatar";


export function MenuModal(props: any) {
    return (
            <Modal
                animationType="fade"
                visible={props.visible}
                transparent={true}
                onRequestClose={() => {
                    props.handlerModalClick();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Меню</Text>
                        <Text style={styles.modalText}>1 Пункт</Text>
                        <Text style={styles.modalText}>2 Пункт</Text>
                        <Text style={styles.modalText}>3 Пункт</Text>
                    </View>
                    <View style={{backgroundColor: "rgba(0,0,0,0.2)", width:"20%", height: "100%"}} onTouchEnd={() => props.handlerModalClick()}/>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    modalView: {
        backgroundColor: "white",
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        height: "100%"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 10,
        fontSize: 20,
    }
});

