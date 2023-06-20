import React from 'react'
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


import { LeftArrow, RightArrow } from '../../assets'
import colors from '../../utils/colors/colors'
const HalamanPersyaratanBeperkara = ({navigation}) => {

        const handleLinkPress = () => {
        var Link1 = 'https://drive.google.com/drive/u/0/folders/1k1CJbJ5ke46d8KuSoei8VcwGB6Ja0S2k'
        Linking.openURL(Link1)
        .then((supported) => {
            if (supported) {
                return Linking.openURL(Link1);
            } else {
                console.log("Tautan Tidak Dapat Dibuka:"+ Link1)

            }
        })
        .catch((error) => console.log('Terjadi Kesalahan' + error));
    };

        const Link2 = () => {
        var Link1 = 'https://drive.google.com/drive/u/0/folders/1fnrpstIUwarOwvLFrSOqIzfCXgOwuUSb';
        Linking.openURL(Link1)
        .then((supported) => {
            if (supported) {
                return Linking.openURL(Link1);
            } else {
                console.log("Tautan Tidak Dapat Dibuka:"+ Link1)

            }
        })
        .catch((error) => console.log('Terjadi Kesalahan' + error));
    };

      const Link3 = () => {
        var Link1 = 'https://drive.google.com/drive/u/0/folders/1eCGQc_-dXHTDahvjt4vjS6ujxFJ-3VQB';
        Linking.openURL(Link1)
        .then((supported) => {
            if (supported) {
                return Linking.openURL(Link1);
            } else {
                console.log("Tautan Tidak Dapat Dibuka:"+ Link1)

            }
        })
        .catch((error) => console.log('Terjadi Kesalahan' + error));
    };


  return (
    
 <View style={{flex:1, backgroundColor:'#fff'}}>
 <View style={{padding:10, backgroundColor:colors.primary}}>
<View style={{flexDirection:'row', justifyContent:'flex-start'}}>

<View>
    <TouchableOpacity onPress={()=> navigation.navigate('HalamanHome')}>
        <LeftArrow width={40} height={40} fill='#fff'/>
    </TouchableOpacity>
</View>

<View style={{padding:10, paddingLeft:15}}>
<Text style={{fontFamily:'Poppins-Regular', color:'#fff', }}>Persyaratan Berperkara</Text>
</View>


</View>
 </View>
 <ScrollView>

<View style={{alignItems:'center'}}>
<Text style={{fontFamily:'Poppins-Bold', textAlign:'center'}}>Prosedur Berperkara{'\n'}Tempat Pendaftaran</Text>

<Text style={{fontFamily:'Poppins-Regular', textAlign:'center'}}>JL.Jenderal Soedirman, Cihoijang-Langgur 97610{'\n'}Waktu:Senin s/d Kamis 08.00 s/d 16.30{'\n'}Jum'at 08.00 s/d 17.00</Text>
<Text style={{fontFamily:'Poppins-Regular', textAlign:'center'}}>Pihak berperkara Lansung datang ke Kepaniteraan Pengadilan Agama Tual, Sebagaimana waktu yang telah ditentukan dan tidak boleh diwalikan, Kecuali telah menguasakan pada Pengacara / Advokat / Kuasa Insidentil yang telah diberi kuasa oleh pihak beperkara</Text>
</View>



<View style={{padding:10, paddingTop:20}}>

    <TouchableOpacity onPress={handleLinkPress}>
    <View style={{padding:10, backgroundColor:colors.primary, width:'100%', flexDirection:'row', justifyContent:'flex-start'}}>
<RightArrow width={50} height={30} fill='#fff'/>
<Text style={{color:'#fff', fontFamily:'Poppins-Regular', top:3}}>Gugatan</Text>
</View>
    </TouchableOpacity>


 <TouchableOpacity onPress={Link2} style={{paddingTop:10}}>
    <View style={{padding:10, backgroundColor:colors.primary, width:'100%', flexDirection:'row', justifyContent:'flex-start'}}>
<RightArrow width={50} height={30} fill='#fff'/>
<Text style={{color:'#fff', fontFamily:'Poppins-Regular', top:3}}>Permohonan</Text>
</View>
    </TouchableOpacity>

    <TouchableOpacity onPress={Link3} style={{paddingTop:10}}>
    <View style={{padding:10, backgroundColor:colors.primary, width:'100%', flexDirection:'row', justifyContent:'flex-start'}}>
<RightArrow width={50} height={30} fill='#fff'/>
<Text style={{color:'#fff', fontFamily:'Poppins-Regular', top:3}}>Produk Pengadilan</Text>
</View>
    </TouchableOpacity>

</View>


 </ScrollView>
 </View>
  )
}

export default HalamanPersyaratanBeperkara

const styles = StyleSheet.create({})