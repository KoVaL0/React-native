import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text, TextProps} from './Themed';
import {Avatar} from "./Avatar";

type ChatType = {
  img: string,
  date: string,
  message: string,
  name: string,
}

export function ChatBlock(props: TextProps & ChatType) {
    return (
        <View style={[props.style, styles.block]}>
          <Avatar img={props.img}/>
          <View style={styles.content}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.message}>{props.message}</Text>
          </View>
          <Text style={styles.date}>{props.date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  block: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#898989",
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  date: {
    flex: 1,
    fontSize: 12,
    alignSelf: "flex-start",
    textAlign: "right",
  },
  message: {
    fontSize: 14,
    margin: "auto",
    height: 36,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  content: {
    paddingHorizontal: 10,
  },
})
