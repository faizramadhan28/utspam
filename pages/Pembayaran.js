/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Pembayaran = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.isi}>
        <Text style={styles.text}>Silahkan Transfer ke Nomor DANA 0813xxxxxxxx</Text>
        <TouchableOpacity 
                style={styles.button}
                onPress={()=>navigation.navigate('Beranda')}>
            <Text style={styles.textSelesai}>Selesai</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    isi: {
        backgroundColor: '#fff',
        padding: 50,
        width: '80%',
        top: '10%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },
    text: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#FF8C00',
        left: '20%',
        width: '60%',
        padding: 10,
        borderRadius: 5,
    },
    textSelesai: {
        color: 'white',
        textAlign: 'center',
    },
});
export default Pembayaran;
