import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
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
    }
})
