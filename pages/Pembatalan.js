/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const Pembatalan = () => {
  return (
    <SafeAreaView>
        <View>
            <View style={styles.head}>
                <Text style={styles.titlehead}>
                    Daftar Pembatalan
                </Text>
            </View>
            <View>
              <Image
                source={require('../src/image/ticket-free-icon-font.png')}
                style={{width: 150, height: 150, marginTop: 100, marginLeft: 120 }}
              />
            </View>
            <View>
                <Text style={styles.textnoactivity}>
                    Tidak Ada Aktivitas Pembatalan Tiket
                </Text>
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
    textnoactivity: {
        marginTop: 50,
        color: '#082B59',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Pembatalan;
