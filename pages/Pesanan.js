/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const Pesanan = () => {
  return (
    <SafeAreaView>
        <View>
            <View style={styles.head}>
                <Text style={styles.titlehead}>
                    Daftar Pemesanan
                </Text>
            </View>
            <View style={styles.textList}>
                    <Text style={styles.titleList}>Bakuheni ---- Merak</Text>
                    <Text style={styles.textSemuaList}>Jadwal Masuk Pelabuhan</Text>
                    <Text style={styles.textSemuaList}>Kamis 17 Maret 2021</Text>
                    <Text style={styles.textSemuaList}>15.30 WIB</Text>
                    <Text style={styles.textSemuaList}>Layanan</Text>
                    <Text style={styles.textSemuaList}>Express</Text>
                    <Text style={styles.textSemuaList}>Dewasa x 1 Rp 65.000</Text>
                    <View
                        style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginTop: 10,
                        }}/>
                    </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    head: {
        backgroundColor: '#082B59',
        width: '100%',
        padding: 25,
    },
    titlehead: {
        textAlign : 'center',
        color : 'white',
        fontSize : 18,
    },
    textList: {
        backgroundColor: '#D3D3D3',
        padding: 10,
        width: '80%',
        left: 40,
        shadowColor: '#000',
        elevation: 5,
        borderWidth: 1,
        bottom: 10,
        marginTop: 50,
    },
    textSemuaList: {
        color: '#000000',
        fontSize: 12,
    },
    titleList: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 20,
        fontWeight: 'bold',
    },
});

export default Pesanan;
