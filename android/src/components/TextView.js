import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { TEXT_COLOR_APP, REGULAR } from '../constants/StyleTypes';

export default function TextView({ children, style, ...rest }) {
    return (
        <Text style={[styles.textStyle, style]} {...rest}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: TEXT_COLOR_APP,
        fontFamily: REGULAR
    }
})