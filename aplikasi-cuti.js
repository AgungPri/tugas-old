import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MaintenanceScreen from '../../../Molecule/MaintenanceScreen'

export default class SalarySlipScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1, fontFamily: "Medium", fontSize: 15, paddingHorizontal: 22 }}>Slip gaji</Text>
                    <Text style={{flex:1, textAlign:'right', fontFamily: "Medium", fontSize: 15 }}>Kembali</Text>
                </View>
            </View>
        )
    }
}
