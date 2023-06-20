import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../../../utils/colors/colors'

const HalamanNotifikasi = () => {
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
<ScrollView>
  <Text style={{fontFamily:'Poppins-Bold', color:colors.primary, textAlign:'center', paddingTop:20}}>BELUM ADA NOTIFIKASI</Text>
</ScrollView>
    </View>
  )
}

export default HalamanNotifikasi

const styles = StyleSheet.create({})