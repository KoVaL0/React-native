import * as React from 'react';
import {Button, FlatList, StyleSheet, TextInput} from 'react-native';

import {Text, View} from '../components/Themed';
import {useEffect, useState} from "react";
import {login, registration} from "../api/users";
import {store} from "../App";
import {setDialogId, setUser} from "../redux/data/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login(props: any) {
    const [loadMessage, setLoadMessage] = useState(false)
    const [phone, onChangePhone] = React.useState("+375336785179");
    const [password, onChangePassword] = React.useState("1111");

    const onPressSubmit = async () => {
        if (phone.trim() && password.trim()) {
            const user = await login(phone, password);
            if (user) {
                onChangePassword("");
                await store.dispatch(setUser(user));
                props.navigation.navigate("Root")
            }
        }
    }

    return (
        <React.Fragment>
            <View style={styles.container}>
                <Text style={styles.title}>Войти</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePhone}
                    textContentType={"telephoneNumber"}
                    value={phone}
                    placeholder="Номер телефона"
                    keyboardType="numeric"
                    textAlign={"center"}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    blurOnSubmit={true}
                    textContentType={"newPassword"}
                    value={password}
                    placeholder="Пароль"
                    keyboardType="numeric"
                />
                <Button
                    onPress={() => onPressSubmit()}
                    color={"#6e748b"}
                    title={"Вход"}
                />
                <View style={styles.button}>
                    <Button
                        onPress={() => props.navigation.navigate("Register")}
                        color={"#5c6aa1"}
                        title={"или Зарегистрироваться"}
                    />
                </View>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        textAlignVertical: "top",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
        width: "100%",
        padding: 5,
        textAlign: "center",
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        marginTop: 20
    }
});
