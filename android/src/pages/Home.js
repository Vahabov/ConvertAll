import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, FlatList, Image, View, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BOLD, COLOR_APP, FLEX_CENTER, FULL_WIDTH } from '../constants/StyleTypes';
import ConvertInput from '../components/ConvertInput';
import { useSelector, useDispatch } from 'react-redux';
import { currenciesFeth, removeCurrency } from '../actions/ExchangeActions';
import TextView from '../components/TextView';
import Pointing from '../assets/images/icons/pointing.svg';


export default function Home() {

    const nowCurrencies = useSelector(state => state.exc.nowCurrencies);
    const currencies = useSelector(state => state.exc.currencies);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        currencies.length <= 0 ?
            dispatch(currenciesFeth()) :
            null;
        setTimeout(() => {
            setLoading(false)
        }, 700);
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            {
                loading ?
                    <View style={styles.loadingView}>
                        <ActivityIndicator size='large' color={COLOR_APP} />
                    </View>
                    :
                    nowCurrencies.length ?
                        <FlatList
                            data={nowCurrencies}
                            keyExtractor={item => item.id}
                            style={styles.mainBlock}
                            renderItem={({ item }) => (
                                <ConvertInput
                                    flag={
                                        <Image
                                            style={{ width: '100%', height: '100%' }}
                                            source={{
                                                uri: item.flag_png,
                                            }}
                                        />
                                    }
                                    key={item.id}
                                    onPressRemove={() => { dispatch(removeCurrency(item.id)) }}
                                    name={item.name}
                                    code={item.code}
                                    sourceExc={item.sourceExc}
                                    comparativeValue={`1 AZN = ${item.value} ${item.code}`} />
                            )} />
                        :
                        <View style={styles.messageBlock}>
                            <TextView style={styles.message}>
                                Please check currency
                        </TextView>
                            <Pointing style={styles.pointing} width={150} height={150} />
                        </View>
            }

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
    },
    messageBlock: {
        flex: 1,
        alignItems: 'center',
        position: 'relative'
    },
    pointing: {
        position: 'absolute',
        bottom: 97,
    },
    message: {
        fontSize: 20,
        fontFamily: BOLD,
        marginTop: 200,
        opacity: .6
    },
    loadingView: {
        ...FLEX_CENTER,
        marginTop: 200,
    }
})