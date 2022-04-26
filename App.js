import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import DesignJ from './src/DesignJ';
import { TouchableHighlight } from 'react-native-web';
// import iconHome from './icon/test.png' memanggil image dengan indexing
// <<<ini panduan command>>>
// hapus backgroundColor <jika tidak digunakankarna ini tujuannya untuk awal awal biar mudah dalam design
// selanjutnya tambahkan Image soruce=ukuran width dan heigh 26
// kemudian remove backgroundColor box yellow saja
// kemudian icon-active
// kemudian text home diganti warna color: 'green'
// selanjutnya kita akan mencoba men styling konten yang dibagian atas inini
// remove style={style.welcome}
// tambahkan warna putih wrapper untuk bagian navigation / footer biar sesuai
// selanjutnya membuat search bar dan icon pada bagian atas
// selanjutnya  buat <TextInput value="what do you want to eat? " /> dan lalu kasih border dan radius
// ketika sudah mengatur dari icon dan text input maka ganti background utamanya adalah putih

export default function App() {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
        <View style={{ flexDirection: 'row', marginHorizontal: 253, width: 23, height: 23, marginTop: 12 }}>
          <Image source={require('./icon/Mask_group.png')}></Image>
        </View>
        {/* Bahasa ^ */}
        <View style={{ flexDirection: 'row', width: 426, height: 74, marginHorizontal: 15 }}>
          <Image source={require('./icon/Background1.png')}></Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./icon/Background.png')}></Image>
        </View>
        {/* Bacgkround ^ */}
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 150 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 37, color: '#516BEB', marginBottom: 5, fontWeight: 'bold' }}>Masuk.</Text>
          <Text style={{ fontSize: 10, color: '#516BEB', marginBottom: 1 }}>Selamat datang kembali ! Masuk</Text>
          <Text style={{ fontSize: 10, color: '#516BEB', marginBottom: 1 }}>untuk melanjutkan ke HRIS</Text>

          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput placeholder='Server' style={{ borderWidth: 1, borderColor: '#D0D7FC', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 20, paddingRight: 250, backgroundColor: 'white' }}></TextInput>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput placeholder='Email' style={{ borderWidth: 1, borderColor: '#D0D7FC', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 20, paddingRight: 250, backgroundColor: 'white' }}></TextInput>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput placeholder='Password' style={{ borderWidth: 1, borderColor: '#D0D7FC', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 20, paddingRight: 250, backgroundColor: 'white' }}></TextInput>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ position: 'relative', flex: 1, alignItems: 'center', alignContent: 'center' }}>
              <TouchableOpacity style={{backgroundColor: '#516BEB', paddingVertical: 13, borderwith: 10, borderRadius: 15, height: 48, width: 204}}>
                <Text style={{marginLeft: 76, fontSize: 16, fontWeight: 'normal', color: 'white'}}>MASUK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

}

const style = StyleSheet.create({
});