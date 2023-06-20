import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { LOGOPATUAL } from '../../assets'
const HalamanVisiDanMisi = () => {
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
    

<ScrollView>

<View style={{padding:10, alignItems:'center'}}>
    <Text style={{fontFamily:'Poppins-Bold', textAlign:'center', fontSize:20}}>VISI DAN MISI</Text>
</View>

<View style={{padding:10, alignItems:'center'}}>
<Image style={{width:150, height:150}} source={LOGOPATUAL} />
</View>

<Text style={{padding:10, fontFamily:'Poppins-Regular', fontSize:14, }}>PENGADUILAN AGAMA TUAL</Text>

<View style={{padding:10}}>
    <Text style={{fontFamily:'Poppins-Bold', textAlign:'center', fontSize:20}}>VISI</Text>
</View>
<Text style={{padding:10, fontFamily:'Poppins-Regular', fontSize:14. }}>TERWUJUDNYA PENGADILAN AGAMA TUAL YANG AGUNG</Text>
<View style={{padding:10}}>
    <Text style={{fontFamily:'Poppins-Bold', textAlign:'center', fontSize:20}}>MISI</Text>
</View>

<Text style={{padding:10, fontFamily:'Poppins-Regular', fontSize:14. }}>1. MENJAGA KEMANDIRIAN PENGADILAN AGAMA TUAL.</Text>
<Text style={{padding:10, fontFamily:'Poppins-Regular', fontSize:14. }}>2. MEMBERIKAN PELAYANAN HUKUM YANG BERKEADILAN.</Text>
<Text style={{padding:10, fontFamily:'Poppins-Regular', fontSize:14. }}>3. MENINGKATKAN KUALITAS KEPEMIMPINAN PENGADILAN AGAMA TUAL.</Text>
<Text style={{padding:10, fontFamily:'Poppins-Regular', fontSize:14. }}>4. MENINGKATKAN KREDIBILITAS DAN TRANSPARANSI PENGADILAN AGAMA TUAL.</Text>
</ScrollView>

    </View>
  )
}

export default HalamanVisiDanMisi

const styles = StyleSheet.create({})