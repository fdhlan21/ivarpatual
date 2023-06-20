import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { EcortIcon, GugatanMandiriIcon, Info, JadwalSidang, Money, Pengadilan, Pengumuman, Persyaratan, Produser, Slider1, Slider2, Slider3, Slider4 } from '../../assets';
import colors from '../../utils/colors/colors';

const HalamanHome = ({navigation}) => {

    const images = [Slider1,Slider4,Slider2,Slider3,];

      const handleLinkPress = () => {
        var Link1 = 'https://sipp.pa-tual.go.id/'
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

    const handleLink2 = () => {
        var Link1 = 'https://sipp.pa-tual.go.id/';
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


    
    const handleLink3 = () => {
        var Link1 = 'https://www.pa-tual.go.id/';
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

    

        
    const handleLink4 = () => {
        var Link1 = 'http://36.67.95.65/panjar-perkara/';
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

    
    const handleLink5 = () => {
        var Link1 = 'http://sipp.pa-tual.go.id/';
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


        const handleLink6 = () => {
        var Link1 = 'https://ecourt.mahkamahagung.go.id/';
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


        const handleLink7 = () => {
        var Link1 = 'https://gugatanmandiri.badilag.net/';
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

 <ScrollView>
  <View style={{}}>
 <SliderBox 

  sliderBoxWidth='100%'
 images={images} 
 autoplay={true} 
 loop={true} 
 removeClippedSubviews={false}  
 autoplayInterval={5000}
 firstItem={0}
 dotStyle={{height:5, width:5,}}
 dotColor={colors.primary}
 />

 </View>

<View style={{padding:10, paddingTop:20}}>
  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={()=> navigation.navigate('HalamanSeputarPatual')} style={{ alignItems:'center'}}>
<Pengadilan width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', }}>Seputar PA TUAL</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={handleLinkPress} style={{ alignItems:'center'}}>
<Info width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', }}>Info Perkara</Text>
</TouchableOpacity>
</View>

<View  style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={handleLink4} style={{ alignItems:'center'}}>
<Money width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', }}>Panjar Perkara</Text>
</TouchableOpacity>
</View>
  </View>

  <View style={{paddingTop:30, flexDirection:'row', justifyContent:'space-around'}}>

<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanPersyaratanBeperkara')} style={{ alignItems:'center'}}>
<Persyaratan width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', }}>Persyaratan Berperkara</Text>
</TouchableOpacity>
</View>
  
  <View  style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={handleLink2} style={{ alignItems:'center'}}>
<JadwalSidang style={{left:5}}   width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', }}>Jadwal Sidang</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={()=> navigation.navigate('HalamanProsedurBeperkara')} style={{ alignItems:'center'}}>
<Produser width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', }}>Prosedur Berperkara</Text>
</TouchableOpacity>
</View>


  </View>

    <View style={{paddingTop:30, flexDirection:'row', justifyContent:'space-around'}}>

<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={handleLink5} style={{ alignItems:'center'}}>
<Pengumuman style={{bottom:10}} width={50} height={50}/>
<Text style={{textAlign:'center', fontSize:9, fontFamily:'Poppins-Regular', bottom:5 }}>Pengumuman / {'\n'} Informasi{'\n'}Pengadilan</Text>
</TouchableOpacity>
</View>
  
<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={handleLink6} style={{ alignItems:'center'}}>
<Image style={{width:90, height:25, top:10}} source={EcortIcon}/>
<Text style={{textAlign:'center', fontSize:12, fontFamily:'Poppins-Regular', top:35}}>E-Court</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, backgroundColor:'#fff', borderWidth:1, borderRadius:10, height:100, width:100}}>
<TouchableOpacity onPress={handleLink7} style={{ alignItems:'center'}}>
<Image style={{width:'80%', height:60, top:0}} source={GugatanMandiriIcon}/>
<Text style={{textAlign:'center', fontSize:9, fontFamily:'Poppins-Regular', top:2}}>Gugatan Mandiri</Text>
</TouchableOpacity>
</View>


  </View>



</View>

 </ScrollView>
  
 </View>
  )
}

export default HalamanHome

const styles = StyleSheet.create({})