import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const MyLink = () => {
    const handleLinkPress = () => {
        Linking.openURL('https://sipp.pa-tual.go.id/')
        .then((supported) => {
            if (supported) {
                return Linking.openURL('https://sipp.pa-tual.go.id/');
            } else {
                console.log("Tautan Tidak Dapat Dibuka:"+ 'https://sipp.pa-tual.go.id/')

            }
        })
        .catch((error) => console.log('Terjadi Kesalahan' + error));
    };
  return (
    <View>
      <TouchableOpacity>
        
      </TouchableOpacity>
    </View>
  )
}

export default MyLink

const styles = StyleSheet.create({})