import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ProduserBeperkara } from '../../assets';
const HalamanProsedurBeperkara = () => {
  const images = [ProduserBeperkara];
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
    <View style={{alignItems:'center', paddingTop:'80%'}}>
  
<Image  style={{width:'100%', height:180,  resizeMode:'contain' }}  source={ProduserBeperkara} />

    </View>
    </View>
  )
}

export default HalamanProsedurBeperkara

const styles = StyleSheet.create({})