import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Emailicon, InfoBubble, PhoneIcon2 } from '../../assets'
import colors from '../../utils/colors/colors'
const HalamanHubungiKami = () => {
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
     <ScrollView>
      <View style={{padding:10, alignItems:'center'}}>
        <Text style={{fontFamily:'Poppins-Bold', fontSize:20, textAlign:'center'}}>HUBUNGI KAMI</Text>
      </View>
   
   <View style={{padding:10, alignItems:'center'}}>
 <InfoBubble  width={100} height={100} fill='#009895' />
   </View>

   <Text style={{fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center'}}>Pertanyaan bisa langsung disampaikan melalui E-Mail:</Text>

<View style={{padding:10, paddingTop:20}}>
<View style={{justifyContent:'flex-start', padding:10, flexDirection:'row', backgroundColor:colors.primary, borderBottomRightRadius:10, borderTopLeftRadius:10, }}>
<Emailicon width={30} height={30}  />
<Text style={{color:'#fff', fontFamily:'Poppins-Regular',  textAlign:'center', left:30, top:3}}>pa.tualmaluku@gmail.com</Text>
</View>
</View>

<Text style={{fontFamily:'Poppins-Regular', textAlign:'center', paddingTop:10}}>ATAU</Text>
<Text style={{fontFamily:'Poppins-Regular', textAlign:'center', paddingTop:10}}>Bisa datang langsung ke kantor Pengadilan Agama Tual, yang beralamat di, Jl. Jendral Soedirman, Choijang-Langgur 97610</Text>
<View style={{padding:10, paddingTop:20}}>
<View style={{justifyContent:'flex-start', padding:10, flexDirection:'row', backgroundColor:colors.primary, borderBottomRightRadius:10, borderTopLeftRadius:10, }}>
<PhoneIcon2  width={30} height={30}  />
<Text style={{color:'#fff', fontFamily:'Poppins-Regular',  textAlign:'center', left:30, top:3}}>(0916) 23572</Text>
</View>
</View>


     </ScrollView>
    </View>
  )
}

export default HalamanHubungiKami

const styles = StyleSheet.create({})