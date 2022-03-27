/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const InformasiPemesanan = ({navigation}) => {
  return (
    <SafeAreaView>
    <View>
        <View style={styles.isi}>
            <Text style={styles.title}>Kapalzy</Text>
                <View>
                    <Text style={styles.textInfoPemesanan}>Informasi Pemesanan</Text>
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

                <View>
                    <Text style={styles.dataPemesan}>Data Pemesan</Text>
                </View>

                <View style={styles.input}>
                    <Text style={styles.textForm}>Nama Lengkap</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nama Lengkap" />
                </View>

                <View style={styles.input}>
                    <Text style={styles.textForm}>Identitas</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Identitas" />
                </View>

                <View style={styles.input}>
                    <Text style={styles.textForm}>Umur</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Umur" />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('Pembayaran')}>
                    <Text style={styles.textButton}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    isi: {
        backgroundColor: '#fff',
        padding: 20,
        width: '80%',
        top: '10%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },
    title: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#082B59',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#FF8C00',
        left: '20%',
        width: '60%',
        padding: 10,
        borderRadius: 5,
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 5,
        height: 40,
        fontSize: 12,
    },
    textList: {
        backgroundColor: '#D3D3D3',
        padding: 10,
        width: '100%',
        shadowColor: '#000',
        elevation: 5,
        borderWidth: 1,
        bottom: 10,
        top: 10,
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
    dataPemesan: {
        marginTop: 20,
        color: '#000000',
    },
    textInfoPemesanan:{
        fontSize: 16,
        color: '#000000',
    },
    textForm: {
        color: '#000000',
        fontSize: 12,
        marginTop: 20,
    },
});

export default InformasiPemesanan;
