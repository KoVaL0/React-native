import * as React from 'react';
import {StyleSheet, Image} from 'react-native';

type Avatar = {
    img: string,
    style?: object,
}

export function Avatar(props: Avatar) {
    return (
            <Image source={{uri: props.img}} style={[styles.image, props.style]}/>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 36,
        height: 36,
        borderRadius: 50,
        alignSelf: "center",
    }
})
