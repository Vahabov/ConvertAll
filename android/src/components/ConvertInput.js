import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import TextView from './TextView';
import { RADIUS_BTN, FLEX_BETWEEN, FLEX_CENTER, BOLD } from '../constants/StyleTypes';
import CloseIcn from '../assets/images/icons/close';

export default function ConvertInput(props) {
    return (
        <View style={styles.blockView}>
            <View style={styles.head}>
                <TextView style={styles.blockName}>
                    {props.name}
                </TextView>
                <TouchableOpacity onPress={props.onPressRemove}>
                    <CloseIcn width={15.5} height={15.5} />
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <View style={styles.left}>
                    <View style={styles.flag}>
                        {props.flag}
                    </View>
                    <TextView style={styles.valName}>{props.code}</TextView>
                </View>
                <TextInput style={styles.input} keyboardType="phone-pad" placeholder="0.0" />
            </View>
            <View style={styles.foot}>
                <TextView style={styles.footText}>{props.sourceExc}</TextView>
                <TextView style={styles.footText}>{props.comparativeValue}</TextView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    blockView: {
        backgroundColor: '#fff',
        borderRadius: RADIUS_BTN,
        padding: 20,
        marginBottom: 20,
    },
    head: {
        flexDirection: 'row',
        ...FLEX_BETWEEN,
    },
    blockName: {
        fontSize: 14,
        color: '#CDD4DB'
    },
    main: {
        marginTop: 15,
        backgroundColor: '#F7F8F9',
        borderRadius: RADIUS_BTN,
        padding: 15,
        flexDirection: 'row',
        ...FLEX_BETWEEN,
        overflow: 'hidden',
    },
    left: {
        flexDirection: 'row',
        ...FLEX_CENTER,
        marginRight: 15,
        maxWidth: '50%',
    },
    flag: {
        width: 30,
        height: 30,
        overflow: 'hidden',
        borderRadius: 100,
        marginRight: 15
    },
    valName: {
        fontSize: 24,
        color: 'rgba(75, 84, 90, 0.5)',
    },
    input: {
        fontSize: 25,
        color: '#4B545A',
        fontFamily: BOLD,
        textAlign: 'right',
        textAlignVertical: 'top',
        maxWidth: '60%',
        minWidth: '45%',
    },
    foot: {
        flexDirection: 'row',
        marginTop: 15,
        ...FLEX_BETWEEN
    },
    footText: {
        color: '#CDD4DB',
        fontSize: 12,
        maxWidth: '50%',
    }
})