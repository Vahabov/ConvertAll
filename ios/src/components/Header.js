import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Logo from '../assets/images/icons/logo.svg';
import { BOLD } from '../constants/StyleTypes';

const FULLWIDTH = Dimensions.get('screen').width;

export default function Header() {
    return (
        <View style={styles.header}>
            <Logo width={36} height={27.71} />
            <Text style={styles.logoText}>CONVERTALL</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        width: FULLWIDTH,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    logoText: {
        fontSize: 16,
        fontFamily: BOLD,
        color: '#000',
        marginLeft: 10
    }
})