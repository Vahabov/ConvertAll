import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import Pluse from '../assets/images/icons/pluse.svg';
import { FLEX_CENTER, COLOR_APP, RADIUS_BTN, FULL_WIDTH, FULL_HEIGHT, BOLD, FLEX_BETWEEN, REGULAR, MEDIUM } from '../constants/StyleTypes';
import TextView from './TextView';
import RBSheet from "react-native-raw-bottom-sheet";
import CloseIcn from '../assets/images/icons/close';
import DollarBlue from '../assets/images/icons/dollarBlue';
import DollarWhite from '../assets/images/icons/dollarWhite';
import BitcoinBlue from '../assets/images/icons/bitcoinBlue';
import BitcoinWhite from '../assets/images/icons/bitcoinWhite';

import AddExcElem from './AddExcElem';
import AzeFlag from '../assets/images/icons/azerbaijan';
import TrFlag from '../assets/images/icons/turkey';

export default function Footer() {
    const refRBSheet = useRef();
    const refScrollView = useRef();
    const [scrollValue, setScrollValue] = useState(true);

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
                dragFromTopOnly={true}
                height={FULL_HEIGHT - 110}
                customStyles={{
                    draggableIcon: {
                        backgroundColor: "#D5DDE0",
                        marginBottom: 20
                    },
                    container: {
                        borderTopRightRadius: RADIUS_BTN,
                        borderTopLeftRadius: RADIUS_BTN,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 20,
                        paddingTop: 5
                    }
                }}
            >
                <View style={styles.head}>
                    <TextView style={styles.titleModal}>Valyuta əlavə et</TextView>
                    <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                        <CloseIcn width={14} height={14} />
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <View style={styles.tabBar}>
                        <TouchableOpacity
                            activeOpacity={.7}
                            style={[styles.btnTab, { backgroundColor: scrollValue ? COLOR_APP : '#fff' }]}
                            onPress={() => {
                                refScrollView.current.scrollTo();
                                setScrollValue(true);
                            }}>

                            <View style={styles.icnBtn}>
                                {
                                    scrollValue ? <DollarWhite width={16} height={16} /> : <DollarBlue width={16} height={16} />
                                }
                            </View>

                            <TextView style={{ color: scrollValue ? '#fff' : '#000' }}>Valyuta</TextView>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.7}
                            style={[styles.btnTab, { backgroundColor: scrollValue ? '#fff' : COLOR_APP }]}
                            onPress={() => {
                                refScrollView.current.scrollToEnd();
                                setScrollValue(false);
                            }}>

                            <View style={styles.icnBtn}>
                                {
                                    scrollValue ? <BitcoinBlue width={16} height={16} /> : <BitcoinWhite width={16} height={16} />
                                }
                            </View>

                            <TextView style={{ color: scrollValue ? '#000' : '#fff' }}>Crypto</TextView>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.tabContainer}
                        decelerationRate={3}
                        scrollEnabled={false}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        pagingEnabled={true}
                        ref={refScrollView}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.tab}>
                            <AddExcElem flag={<AzeFlag width='100%' height='100%' />} excName="AZN" />
                        </View>
                        <View style={styles.tab}>
                            <AddExcElem flag={<TrFlag width='100%' height='100%' />} excName="TRY" />
                        </View>
                    </ScrollView>
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
        paddingHorizontal: 15,
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
        ...FLEX_BETWEEN
    },
    titleModal: {
        fontFamily: BOLD,
        fontSize: 18,
        color: '#4B545A',
        fontFamily: MEDIUM
    },
    main: {
        flex: 1,
        marginTop: 20
    },
    tabBar: {
        flexDirection: 'row',
        ...FLEX_BETWEEN,
        marginBottom: 20
    },
    btnTab: {
        height: 45,
        borderRadius: RADIUS_BTN,
        position: 'relative',
        paddingHorizontal: 15,
        ...FLEX_CENTER,
        minWidth: 150,
        backgroundColor: '#fff',
        width: '48%',
        borderWidth: 1,
        borderColor: '#eee'
    },
    icnBtn: {
        position: 'absolute',
        top: 15,
        left: 15
    },
    tabContainer: {
        overflow: 'hidden'
    },
    tab: {
        width: FULL_WIDTH - 40,
        flex: 1,
        borderWidth: 5,
        borderColor: '#fff'
    }
})