/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';

const RincianTiket = ({navigation}) => {
    const route = useRoute();
  return (
    <SafeAreaView>
        <View>
            <View style={styles.isi}>
                <Text style={styles.title}>Kapalzy</Text>
                <View>
                    <Text style={styles.textKuota}>Kuota tersedia (1000)</Text>
                </View>
                <View>
                    <Text style={styles.textRincian}>Rincian Tiket</Text>
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
                    <Text style={styles.textTotal}>Total Rp 65.000</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={()=>navigation.navigate('InformasiPemesanan')}>
                    <Text style={styles.textButton}>Lanjutkan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonBack}
                    onPress={()=>navigation.goBack()}>
                    <Text style={styles.textButton}>Kembali</Text>
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
    buttonBack: {
        marginTop: 20,
        backgroundColor: '#082B59',
        left: '5%',
        width: '40%',
        padding: 10,
        borderRadius: 5,
    },
    buttonNext: {
        marginTop: 20,
        top: 60,
        backgroundColor: '#082B59',
        left: '55%',
        width: '40%',
        padding: 10,
        borderRadius: 5,
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
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
    textKuota: {
        color: '#000000',
        bottom: 10,
        top: 5,
    },
    textRincian: {
        color: '#000000',
        marginTop: 20,
    },
    textTotal: {
        color: '#000000',
        top: 20,
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
    textJumlahTiket: {
        color: '#000000',
        fontSize: 12,
    },
});
export default RincianTiket;
