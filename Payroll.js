import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, AntDesign, Entypo, EvilIcons, Octicons } from '@expo/vector-icons';
import MaintenanceScreen from '../../../Molecule/MaintenanceScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SalarySlipScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginBottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1, fontFamily: "Medium", fontSize: 20, color: 'white', paddingLeft: 20, paddingHorizontal: 10, backgroundColor: '#516BEB', marginTop: 46, marginLeft: 1, height: 50, marginRight: 130, paddingVertical: 10, borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>Payroll</Text>
                    <View style={{fontFamily: "Medium", backgroundColor: '#516BEB', borderRadius: 15, height: 40, color: '#FFFFFF', marginTop: 50, alignContent: 'center', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, padding:10 }}>
                        <Text style={{ fontFamily: "Medium", color: "#FFFFFF"}}>Kembali</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#FFFFFE', flex: 1, marginTop: 5, borderRadius: 20, marginRight: 15, marginLeft: 15 }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 11, color: '#2C3333', paddingLeft: 7 }}>Nama</Text>
                        <Text style={{ fontFamily: 'Medium', fontSize: 15, color: '#2C3333', paddingLeft: 7, fontWeight: 'bold' }}>Agung Priyatna</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 11, color: '#2C3333', paddingLeft: 7 }}>No Rekening</Text>
                        <Text style={{ fontFamily: 'Medium', fontSize: 15, color: '#2C3333', paddingLeft: 7, fontWeight: 'bold' }}>7389462784</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 11, color: '#2C3333', paddingLeft: 7 }}>Bank</Text>
                        <Text style={{ fontFamily: 'Medium', fontSize: 15, color: '#2C3333', paddingLeft: 7, fontWeight: 'bold' }}>BCA</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 11, color: '#2C3333', paddingLeft: 7 }}>BPJS Kesehatan</Text>
                        <Text style={{ fontFamily: 'Medium', fontSize: 15, color: '#2C3333', paddingLeft: 7, fontWeight: 'bold' }}>0984592753949</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 11, color: '#2C3333', paddingLeft: 7 }}>BPJS Ketenagakerjaan</Text>
                        <Text style={{ fontFamily: 'Medium', fontSize: 15, color: '#2C3333', paddingLeft: 7, fontWeight: 'bold' }}>8234959275948</Text>
                    </View>
                </View>
            </View>
        )
    }
}
