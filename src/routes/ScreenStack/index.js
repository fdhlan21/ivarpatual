import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// In App.js in a new project

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { Home, Hubungi, Notifikasi } from '../../assets';
import HalamanPersyaratanBeperkara from '../../page/HaalamanPersyaratanBeperkara';
import HalamanNotifikasi from '../../page/HaalamanPersyaratanBeperkara/HalamanNotifikasi';
import HalamanBiayaPerkara from '../../page/HalamanBiayaPerkara';
import HalamanHome from '../../page/HalamanHome';
import HalamanHubungiKami from '../../page/HalamanHub';
import HalamanInfoPerkara from '../../page/HalamanInfoPerkara';
import HalamanJadwalSidang from '../../page/HalamanJadwalSidang';
import HalamanPengumuman from '../../page/HalamanPengumuman';
import HalamanProsedurBeperkara from '../../page/HalamanProsedurBeperkara';
import HalamanSejarahPengadilan from '../../page/HalamanSejarahPengadilan';
import HalamanSplash from '../../page/HalamanSplash';
import HalamanVisiDanMisi from '../../page/HalamanVisiDanMisi';
import HalamanPengantarKetuaPengadilanAgamaTual from '../../page/PengantarKetua';
import HalamanSeputarPatual from '../../page/SeputarPatual';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {

return (

  <Tab.Navigator screenOptions={{
    tabBarShowLabel:false,
    
  }}>
  <Tab.Screen name='Beranda' component={HalamanHome} options={{headerShown:false, tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={Home} style={{width:30, height:30, tintColor: focused ? '#009895' : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:10, color: focused ? '#009895' : '#dedede', textAlign:'center'}}>Beranda</Text>
    </View>

  )}}
    
  />
    <Tab.Screen name='Notifikasi' component={HalamanNotifikasi} options={{headerShown:false, tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={Notifikasi} style={{width:30, height:30, tintColor: focused ? '#009895' : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:10, color: focused ? '#009895' : '#dedede', textAlign:'center'}}>Notifikasi</Text>
    </View>

  )}}/>
       <Tab.Screen name='Hubungi Kami' component={HalamanHubungiKami} options={{headerShown:false, tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={Hubungi} style={{width:30, height:30, tintColor: focused ? '#009895' : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:10, color: focused ? '#009895' : '#dedede', textAlign:'center'}}>Hubungi Kami</Text>
    </View>

  )}}/>
</Tab.Navigator>



)
  

}



export default function ScreenStack() {

  return (
  
      <Stack.Navigator initialRouteName='HalamanSplash'>
        <Stack.Screen name="HalamanSplash" component={HalamanSplash} options={{headerShown:false}} />
        <Stack.Screen name="HalamanHome" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="HalamanSeputarPatual" component={HalamanSeputarPatual} options={{headerShown:false}} />
        <Stack.Screen name="HalamanInfoPerkara" component={HalamanInfoPerkara} options={{headerShown:false}} />
        <Stack.Screen name="HalamanBiayaPerkara" component={HalamanBiayaPerkara} options={{headerShown:false}} />
        <Stack.Screen name="HalamanPersyaratanBeperkara" component={HalamanPersyaratanBeperkara} options={{headerShown:false}} />
        <Stack.Screen name="HalamanJadwalSidang" component={HalamanJadwalSidang} options={{headerShown:false}} />
        <Stack.Screen name="HalamanProsedurBeperkara" component={HalamanProsedurBeperkara} options={{headerShown:false}} />
        <Stack.Screen name="HalamanPengumuman" component={HalamanPengumuman} options={{headerShown:false}} />
        <Stack.Screen name="HalamanNotifikasi" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="HalamanHubungiKami" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="HalamanVisiDanMisi" component={HalamanVisiDanMisi} options={{headerShown:false}} />
        <Stack.Screen name="HalamanSejarahPengadilan" component={HalamanSejarahPengadilan} options={{headerShown:false}} />
        <Stack.Screen name="HalamanPengantarKetuaPengadilanAgamaTual" component={HalamanPengantarKetuaPengadilanAgamaTual} options={{headerShown:false}} />


        
      </Stack.Navigator>
  
  );
  }