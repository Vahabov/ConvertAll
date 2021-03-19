import React from 'react'
import { StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FULL_WIDTH } from '../constants/StyleTypes';
import ConvertInput from '../components/ConvertInput';
export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView style={styles.mainBlock}>
                <ConvertInput />
                <ConvertInput />
                <ConvertInput />
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
        paddingLeft: 20,
        paddingRight: 20,
        width: FULL_WIDTH,
        overflow: 'visible'
    }
})