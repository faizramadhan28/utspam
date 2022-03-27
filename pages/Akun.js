/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView,TouchableOpacity, StyleSheet, Image} from 'react-native';

const Akun = () => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../src/image/search-lainnya.png')}
            style={{width: 30, height: 30, top:10, left:70}}
          />
          <Text style={styles.textButton}>Cek Pemesanan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../src/image/user-free-icon-font.png')}
            style={{width: 30, height: 30, top:10, left:70}}
          />
          <Text style={styles.textButton}>Detail Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../src/image/smartphone-free-icon-font.png')}
            style={{width: 30, height: 30, top:10, left:70}}
          />
          <Text style={styles.textButton}>Hubungi Kami</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../src/image/time-past-free-icon-font.png')}
            style={{width: 30, height: 30, top:10, left:70}}
          />
          <Text style={styles.textButton}>Riwayat Pemesanan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    button: {
      borderWidth: 1,
      padding: 10,
      borderColor: 'grey',
      borderRadius: 5,
      width: '50%',
      marginTop: 50,
      marginLeft: 100,
    },
    textButton: {
      color: '#000000',
      textAlign: 'center',
      marginTop: 20,
    },
});
export default Akun;
