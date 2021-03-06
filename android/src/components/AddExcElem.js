import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { BOLD, FLEX_BETWEEN, FLEX_CENTER } from '../constants/StyleTypes';
import PluseElem from '../assets/images/icons/pluse_modal';
import MinusElem from '../assets/images/icons/minus_modal';

import TextView from './TextView';

export default function AddExcElem(props, ...rest) {

    return (
        <View style={[props.style, styles.exchangeTypeElement]} {...rest}>
            <View style={styles.left}>
                <View style={styles.flag}>{props.flag}</View>
                <View>
                    <TextView style={styles.excName}>{props.smallExcName}</TextView>
                    <TextView style={styles.excNameLarge}>{props.largeExcName}</TextView>
                </View>
            </View>
            <TouchableOpacity style={styles.addBtn} onPress={props.onPress}>
                {
                    props.selected ?
                        <MinusElem width={16} height={16} />
                        :
                        <PluseElem width={16} height={16} />
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    exchangeTypeElement: {
        flexDirection: 'row',
        ...FLEX_BETWEEN,
        marginBottom: 15
    },
    left: {
        flexDirection: 'row',
        ...FLEX_CENTER,
        maxWidth: '80%'
    },
    flag: {
        width: 30,
        height: 30,
        overflow: 'hidden',
        borderRadius: 100,
        marginRight: 20,
    },
    excName: {
        fontFamily: BOLD,
        fontSize: 16,
        color: '#4B545A'
    },
    excNameLarge: {
        color: '#99A1A9',
        fontSize: 12,
        marginTop: 3
    },
    addBtn: {
        width: 25,
        height: 25,
        ...FLEX_CENTER,
    }
})