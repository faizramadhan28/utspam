/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

const Home = ({navigation}) => {

    const [textPelabuhanAwal, onChangePelabuhanAwal] = React.useState('');
    const [textPelabuhanTujuan, onChangePelabuhanTujuan] = React.useState('');
    const [textLayanan, onChangeLayanan] = React.useState('');
    const [textTanggalMasuk, onChangeTanggalMasuk] = React.useState('');
    const [textJamMasuk, onChangeJamMasuk] = React.useState('');

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.isi}>
                <Text style={styles.title}>Kapalzy</Text>
                <View style={styles.input}>
                    <Text style={styles.titleInput}>Pelabuhan Awal</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText= {(text) => onChangePelabuhanAwal(text)}
                        value={textPelabuhanAwal}
                        placeholder="Pilih Pelabuhan Awal" />
                </View>

                <View style={styles.input}>
                    <Text style={styles.titleInput}>Pelabuhan Tujuan</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText= {(text) => onChangePelabuhanTujuan(text)}
                        value={textPelabuhanTujuan}
                        placeholder="Pilih Pelabuhan Tujuan" />
                </View>

                <View style={styles.input}>
                    <Text style={styles.titleInput}>Kelas Layanan</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText= {(text) => onChangeLayanan(text)}
                        value={textLayanan}
                        placeholder="Pilih Layanan" />
                </View>

                <View style={styles.input}>
                    <Text style={styles.titleInput}>Tanggal Masuk pelabuhan</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText= {(text) => onChangeTanggalMasuk(text)}
                        value={textTanggalMasuk}
                        placeholder="Pilih Tanggal Masuk" />
                </View>

                <View style={styles.input}>
                    <Text style={styles.titleInput}>Jam Masuk Pelabuhan</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText= {(text) => onChangeJamMasuk(text)}
                        value={textJamMasuk}
                        placeholder="Pilih Jam Masuk" />
                </View>
                <TouchableOpacity style={styles.jumlahOrang}>
                    <Text style={styles.textJumlahOrang}>Dewasa 1 Orang</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.navigate('RincianTiket', {
                        pelabuhanAwal : textPelabuhanAwal,
                        pelabuhanTujuan : textPelabuhanTujuan,
                        layanan: textLayanan,
                        tanggalMasuk: textTanggalMasuk,
                        jamMasuk: textJamMasuk,
                    });
                    }}>
                    <Image
                        source={require('../src/image/search-free-icon-font.png')}
                        style={{width: 14, height: 14, top:10, left:10}}
                    />
                    <Text style={styles.textButton}>Buat Tiket</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    title: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#082B59',
    },
    isi: {
        backgroundColor: '#fff',
        padding: 50,
        width: '80%',
        top: '10%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 5,
        height: 40,
        fontSize: 13,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#FF8C00',
        left: '20%',
        width: '60%',
        padding: 5,
        borderRadius: 5,
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        left : 10,
        bottom : 6,
    },
    jumlahOrang: {
        borderWidth: 1,
        padding: 5,
        borderColor: 'grey',
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#D3D3D3',
    },
    titleInput: {
        color: '#000000',
    },
    textJumlahOrang:{
        color: '#000000',
        textAlign: 'center',
    },
});
export default Home;
