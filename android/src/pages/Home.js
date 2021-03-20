import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FULL_WIDTH } from '../constants/StyleTypes';
import ConvertInput from '../components/ConvertInput';
import { useSelector } from 'react-redux';

export default function Home() {

    const nowExchangeData = useSelector(state => state.exc.nowExchanges)

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView style={styles.mainBlock}>
                {
                    nowExchangeData.map((item, index) => {
                        return (
                            <ConvertInput
                                key={item.id}
                                largeExcName={item.largeExcName}
                                smallExcName={item.smallExcName}
                                sourceExc={item.sourceExc}
                                comparativeValue={item.comparativeValue} />
                        )
                    })
                }
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F8F9',
        flex: 1,
        position: 'relative'
    },
    text: {
        fontSize: 30
    },
    mainBlock: {
        paddingTop: 20,
        marginBottom: 136,
        paddingLeft: 15,
        paddingRight: 15,
        width: FULL_WIDTH,
        overflow: 'visible'
    }
})