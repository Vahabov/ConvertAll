import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Pluse from '../assets/images/icons/pluse.svg';
import { FLEX_CENTER, COLOR_APP, RADIUS_BTN, FULL_WIDTH, FULL_HEIGHT, BOLD, FLEX_BETWEEN, MEDIUM } from '../constants/StyleTypes';
import TextView from './TextView';
import RBSheet from "react-native-raw-bottom-sheet";
import CloseIcn from '../assets/images/icons/close';

import AddExcElem from './AddExcElem';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrency, checkCurrency } from '../actions/ExchangeActions';

export default function Footer() {

    const refRBSheet = useRef();
    const currenciesData = useSelector(state => state.exc.currencies)
    const dispatch = useDispatch();

    const toggleCurrency = (item) => {
        dispatch(addCurrency(item));
    }

    const renderCurrencyElem = ({ item }) => (
        <AddExcElem
            onPress={() => toggleCurrency(item)}
            flag={
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{
                        uri: item.flag_png,
                    }}
                />
            }
            smallExcName={item.code}
            largeExcName={item.name.replace('1 ', '')}
            selected={item.isSelect}
        />
    )

    return (
        <View style={styles.footer}>
            <View style={styles.updateTextView}>
                <TextView style={styles.updateText}>Yeniləndi: 2021-03-18 11:43</TextView>
            </View>
            <TouchableOpacity style={styles.btnAddCurrency} onPress={() => refRBSheet.current.open()}>
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
                    <TouchableOpacity style={styles.closeSheet} onPress={() => refRBSheet.current.close()}>
                        <CloseIcn width={14} height={14} />
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <View style={styles.listView}>
                        {
                            currenciesData.length ?
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    data={currenciesData}
                                    initialNumToRender={10}
                                    keyExtractor={item => item.id}
                                    renderItem={renderCurrencyElem} />
                                :
                                <View style={styles.loadingIndicator}>
                                    <ActivityIndicator size='large' color={COLOR_APP} />
                                </View>
                        }
                    </View>
                </View>
            </RBSheet>
        </View >
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
    btnAddCurrency: {
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
    closeSheet: {
        width: 25,
        height: 25,
        ...FLEX_CENTER
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
    listView: {
        flex: 1,
    },
    // tabBar: {
    //     flexDirection: 'row',
    //     ...FLEX_BETWEEN,
    //     marginBottom: 20
    // },
    // btnTab: {
    //     height: 45,
    //     borderRadius: RADIUS_BTN,
    //     position: 'relative',
    //     paddingHorizontal: 15,
    //     ...FLEX_CENTER,
    //     minWidth: 150,
    //     backgroundColor: '#fff',
    //     width: '48%',
    //     borderWidth: 1,
    //     borderColor: '#eee'
    // },
    // icnBtn: {
    //     position: 'absolute',
    //     top: 15,
    //     left: 15
    // },
    // tabContainer: {
    //     overflow: 'hidden'
    // },
    // tab: {
    //     width: FULL_WIDTH - 40,
    //     flex: 1,
    //     borderWidth: 5,
    //     borderColor: '#fff'
    // },
    loadingIndicator: {
        ...FLEX_CENTER,
        height: FULL_HEIGHT - 250
    }
})