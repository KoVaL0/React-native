import * as React from 'react';
import {Button, FlatList, StyleSheet, TextInput} from 'react-native';

import {Text, View} from '../components/Themed';
import {useEffect, useState} from "react";
import {registration} from "../api/users";
import {store} from "../App";
import {setUser} from "../redux/data/actions";


export default function Registration(props: any) {
    const [loadMessage, setLoadMessage] = useState(false)
    const [phone, onChangePhone] = React.useState("+375336785179");
    const [firstName, onChangeFirstName] = React.useState("Александр");
    const [lastName, onChangeLastName] = React.useState("Ковалёв");
    const [password, onChangePassword] = React.useState("1111");

    const onPressSubmit = async () => {
        if (phone.trim() && firstName.trim() && lastName.trim() && password.trim()) {
            const user = await registration(phone, password, firstName, lastName)
            if (!user) {
                console.log(user, "Ошибка")
            }
            store.dispatch(setUser(user))
            props.navigation.navigate("Root")
            onChangePassword("")
        }
    }
    return (
        <React.Fragment>
            <View style={styles.container}>
                <Text style={styles.title}>Registration</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeFirstName}
                    textContentType="name"
                    value={firstName}
                    placeholder="Имя"
                    keyboardType="default"
                    textAlign="center"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeLastName}
                    textContentType="familyName"
                    value={lastName}
                    placeholder="Фамилия"
                    keyboardType="default"
                    textAlign="center"
                />
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
                    title={"Зарегистрироваться"}
                />
                <View style={styles.button}>
                    <Button
                        onPress={() => props.navigation.navigate("Login")}
                        color={"#5c6aa1"}
                        title={"или Войти"}
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
