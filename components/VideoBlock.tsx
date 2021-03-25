import * as React from 'react';
import {StyleSheet, Image} from 'react-native';

type Avatar = {
    img: string,
    style?: object,
}

export function VideoBlock(props: Avatar) {
    return (
            <Image source={{uri: props.img}} style={[styles.image, props.style]}/>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
        alignSelf: "center",
    }
})
