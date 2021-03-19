import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Pluse from '../assets/images/icons/pluse.svg';
import { FLEX_CENTER, COLOR_APP, RADIUS_BTN } from '../constants/StyleTypes';
import TextView from './TextView';

const FULLWIDTH = Dimensions.get('screen').width;

export default function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.updateTextView}>
                <TextView style={styles.updateText}>Yeniləndi: 2021-03-18 11:43</TextView>
            </View>
            <TouchableOpacity style={styles.btnAddValyuta}>
                <Pluse width={30} height={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 115,
        width: FULLWIDTH,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    updateTextView: {
        height: 60,
        borderWidth: 1,
        borderColor: 'rgba(151, 173, 182, 0.2)',
        ...FLEX_CENTER,
        paddingHorizontal: 20,
        borderRadius: RADIUS_BTN
    },
    btnAddValyuta: {
        width: 60,
        height: 60,
        ...FLEX_CENTER,
        backgroundColor: COLOR_APP,
        borderRadius: 100,
        shadowColor: COLOR_APP,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
})