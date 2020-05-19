import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import MenuUtama from './screens/MenuUtama';
import Profile from './screens/Profile';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import LoginPetaniScreen from './screens/LoginPetaniScreen';
import ChatScreen from './screens/ChatScreen';
import Notification from './screens/NotificationScreen';
import MenuPetaniScreen from './screens/MenuPetaniScreen';
import DaftarProdukPetani from './screens/DaftarProdukPetaniScreen';
import DaftarProdukPelanggan from './screens/DaftarProdukPelangganScreen';
import MenuPelangganScreen from './screens/MenuPelangganScreen';
import HalamanUtamaMarsel from './screens/HalamanUtamaMarsel';
import HalamanUtamaVinny from './screens/HalamanUtamaVinny';
import SuksesOrderScreen from './screens/SuksesOrderScreen';
import ProfilePelangganScreen from './screens/ProfilePelangganScreen';
import BuahanProdukScreen from './screens/BuahanProdukScreen';
import DetailManggaScreen from './screens/DetailManggaScreen';
import DetailDurianscreen from './screens/DetailDurianScreen';
import DetailPisangScreen from './screens/DetailPisangScreen';
import DetailPepayaScreen from './screens/DetailPepayaScreen';
import DetailManggisScreen from './screens/DetailManggisScreen';
import DetailJerukScreen from './screens/DetailJerukScreen';
import BaritoProdukScreen from './screens/BaritoProdukScreen';
import DetailBawangScreen from './screens/DetailBawangScreen';
import DetailCabeScreen from './screens/DetailCabeScreen';
import DetailTomatScreen from './screens/DetailTomatScreen';
import RempahProdukScreen from './screens/RempahProdukScreen';
import DetailCengkihScreen from './screens/DetailCengkihScreen';
import DetailPalaScreen from './screens/DetailPalaScreen';
import DetailKayumanisScreen from './screens/DetailKayumanisScreen';

const navigator = createStackNavigator({
  ProdukPetani: DaftarProdukPetani,
  ProdukPelanggan: DaftarProdukPelanggan,
  Menu: MenuUtama,
  Profile: Profile,
  About: AboutScreen,
  Login: LoginScreen,
  LoginPetani: LoginPetaniScreen,
  Chat: ChatScreen,
  Notification: Notification,
  MenuPetani: MenuPetaniScreen,
  MenuPelanggan: MenuPelangganScreen,
  ProfilePelanggan: ProfilePelangganScreen,
  HalamanMarsel: HalamanUtamaMarsel,    
  HalamanVinny: HalamanUtamaVinny,
  SuksesOrder: SuksesOrderScreen,
  BuahanProduk: BuahanProdukScreen,
  DetailMangga: DetailManggaScreen,
  DetailDurian: DetailDurianscreen,
  DetailPepaya: DetailPepayaScreen,
  DetailPisang: DetailPisangScreen,
  DetailManggis: DetailManggisScreen,
  DetailJeruk: DetailJerukScreen,
  BaritoProduk: BaritoProdukScreen,
  DetailBawang: DetailBawangScreen,
  DetailCabe: DetailCabeScreen,
  DetailTomat: DetailTomatScreen,
  RempahProduk: RempahProdukScreen,
  DetailCengkih: DetailCengkihScreen,
  DetailPala: DetailPalaScreen,
  DetailKayumanis: DetailKayumanisScreen
},{
  initialRouteName: 'HalamanVinny',
  defaultNavigationOptions: {
    headerTitle: 'TaniBisnisShop',
    headerStyle: {
      backgroundColor: '#3498db'
    }
  } 
});

export default createAppContainer(navigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
