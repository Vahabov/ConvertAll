import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FULL_WIDTH } from '../constants/StyleTypes';
import ConvertInput from '../components/ConvertInput';
import { useSelector, useDispatch } from 'react-redux';
import { currenciesFeth, cryptoCurrenciesFeth } from '../actions/ExchangeActions';

export default function Home() {

    const nowCurrencies = useSelector(state => state.exc.nowCurrencies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currenciesFeth())
        dispatch(cryptoCurrenciesFeth())
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <FlatList
                data={nowCurrencies}
                keyExtractor={item => item.id}
                style={styles.mainBlock}
                renderItem={({ item }) => (
                    <ConvertInput
                        key={item.id}
                        largeExcName={item.largeExcName}
                        smallExcName={item.smallExcName}
                        sourceExc={item.sourceExc}
                        comparativeValue={item.comparativeValue} />
                )} />
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