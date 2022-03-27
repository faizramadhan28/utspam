import * as React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Pesanan from './pages/Pesanan';
import Pembatalan from './pages/Pembatalan';
import Akun from './pages/Akun';
import Home from './pages/Home';
import RincianTiket from './pages/RincianTiket';
import InformasiPemesanan from './pages/InformasiPemesanan';
import Pembayaran from './pages/Pembayaran';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <View>
              <Image
                source={require('./src/image/home-free-icon-font.png')}
                style={{width: 25, height: 25}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pesanan saya"
        component={Pesanan}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <View>
              <Image
                source={require('./src/image/book-alt-free-icon-font.png')}
                style={{width: 25, height: 25}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <View>
              <Image
                source={require('./src/image/delete-document-free-icon-font.png')}
                style={{width: 25, height: 25}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lainnya"
        component={Akun}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <View>
              <Image
                source={require('./src/image/menu-burger-free-icon-font.png')}
                style={{width: 25, height: 25}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RincianTiket"
          component={RincianTiket}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InformasiPemesanan"
          component={InformasiPemesanan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pembayaran"
          component={Pembayaran}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
