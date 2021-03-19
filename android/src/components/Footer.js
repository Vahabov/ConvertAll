import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Pluse from '../assets/images/icons/pluse.svg';
import { FLEX_CENTER, COLOR_APP, RADIUS_BTN, FULL_WIDTH, FULL_HEIGHT, BOLD } from '../constants/StyleTypes';
import TextView from './TextView';
import RBSheet from "react-native-raw-bottom-sheet";
import CloseIcn from '../assets/images/icons/close'

export default function Footer() {
    const refRBSheet = useRef();
    return (
        <View style={styles.footer}>
            <View style={styles.updateTextView}>
                <TextView style={styles.updateText}>Yeniləndi: 2021-03-18 11:43</TextView>
            </View>
            <TouchableOpacity style={styles.btnAddValyuta} onPress={() => refRBSheet.current.open()}>
                <Pluse width={30} height={30} />
            </TouchableOpacity>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={FULL_HEIGHT - 138}
                customStyles={{
                    draggableIcon: {
                        backgroundColor: "#000",
                        marginBottom: 20
                    },
                    container: {
                        borderTopRightRadius: RADIUS_BTN,
                        borderTopLeftRadius: RADIUS_BTN,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 20,
                        paddingTop: 10
                    }
                }}
            >
                <View style={styles.head}>
                    <TextView style={styles.titleModal}>
                        Valyuta əlavə et
                    </TextView>
                    <TouchableOpacity>
                        <CloseIcn width={12} height={12} />
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 115,
        width: FULL_WIDTH,
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
        elevation: 7,
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
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleModal: {
        fontFamily: BOLD,
        fontSize: 18,
        color: '#4B545A'
    },

})