import React from 'react'



import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Alamat, LeftArrow, Pengantarketua, SejarahPengadilan, SeputarPatual, VisidanMisi } from '../../assets'
import colors from '../../utils/colors/colors'
const HalamanSeputarPatual = ({navigation}) => {
    const handleLinkPress = () => {
        var Link1 = 'https://www.google.co.id/maps/place/Pengadilan+Agama+Tual/@-5.6523913,132.7376792,17z/data=!3m1!4b1!4m6!3m5!1s0x2d301b9ca27fb9a3:0x510105dc75ecdbac!8m2!3d-5.6523913!4d132.7402541!16s%2Fg%2F11pdy8lbqs?entry=ttu'
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
        var Link1 = 'https://www.pa-tual.go.id/berita-seputar-peradilan'
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
<Text style={{fontFamily:'Poppins-Regular', color:'#fff', }}>Seputar Pa Tual</Text>
</View>

</View>
 </View>
 <ScrollView>

<View style={{padding:10}}>
  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanSejarahPengadilan')} style={{ alignItems:'center'}}>
<SejarahPengadilan width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', }}>Sejarah Pengadilan</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanPengantarKetuaPengadilanAgamaTual')} style={{ alignItems:'center'}}>
<Pengantarketua width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:10, fontFamily:'Poppins-Regular', }}> Pengantar Ketua PA Tual</Text>
</TouchableOpacity>
</View>

<View  style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={Link2} style={{ alignItems:'center'}}>
<SeputarPatual  width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:10, fontFamily:'Poppins-Regular', }}>Berita Seputar PA Tual</Text>
</TouchableOpacity>
</View>
  </View>

<View style={{paddingTop:30}}>

  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanVisiDanMisi')} style={{ alignItems:'center'}}>
<VisidanMisi width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', }}>Visi dan Misi</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity  onPress={handleLinkPress} style={{ alignItems:'center'}}>
<Alamat width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', }}>Alamat PA TUAL</Text>
</TouchableOpacity>
</View>

<View  style={{padding:10, backgroundColor:'#fff', borderRadius:10, height:100, width:100}}>

</View>
  </View>

</View>
</View>

 </ScrollView>
  
 </View>
  )
}

export default HalamanSeputarPatual

const styles = StyleSheet.create({})