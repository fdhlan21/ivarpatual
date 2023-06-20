import { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { SplashScreen } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanSplash = ({navigation}) => {
  

  useEffect(()=>{setTimeout(()=> {navigation.replace('HalamanHome');}, 2000)}, []);
  
  return (
    <View style={{flex:1, backgroundColor:colors.splashscreen}}>
    
    <View style={{padding:0, alignItems:'center', paddingTop:150}}>
<Image style={{width:'100%', height:'100%', alignItems:'center', bottom:50}} source={SplashScreen}/>
    </View>



    </View>
  )
}

export default HalamanSplash

const styles = StyleSheet.create({})