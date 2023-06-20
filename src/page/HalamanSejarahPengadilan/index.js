import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { PaluSidang } from '../../assets'

const HalamanSejarahPengadilan = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      
      <ScrollView>
        <View style={{padding:10, alignItems:'center'}}>
            <Text style={{fontFamily:'Poppins-Bold', fontSize:20}}>Sejarah Pengadilan Agama Tual</Text>
        </View>

        <View style={{padding:10, alignItems:'center'}}>
            <Image style={{width:100, height:100}} source={PaluSidang}/>
        </View>

        <View style={{padding:10, alignItems:'center'}}>
            <Text style={{fontFamily:'Poppins-Regular', textAlign:'justify'}}> A. Dasar Hukum Pembentukan Pengadilan Agama Tual{'\n'}
{'\n'}
Pengadilan Agama Tual merupakan salah satu lingkungan peradilan di bawah Mahkamah Agung sebagai pelaku kekuasan kehakiman yang merdeka untuk menyelenggarakan peradilan guna menegakkan hukum dan keadilan.{'\n'}
{'\n'}
Pengadilan Agama Tual dibentuk berdasarkan :
{'\n'}
{'\n'}
1. Pasal 12 Peraturan Pemerintah Nomor 45 Tahun 1957 lembar negara nomor 99 tahun 1957 tentang pembentukan Pengadilan Agama/Mahkamah Syar'iyah di luar Jawa dan Madura.{'\n'}
{'\n'}
2. Penetapan Menteri Agama Nomor 5 Tahun 1958 tentang pembentukan Pengadilan Agama/Mahkamah Syar'iyah di Sulawesi, Nusa Tenggara, Maluku, dan Irian Barat.{'\n'}
{'\n'}
3. Keputusan Menteri Agama Nomor 23 Tahun 1960 tanggal 14 November 1960, tentang pembentukan Pengadilan Agama Tual.{'\n'}
{'\n'}

B. Sejarah Pengadilan Agama Tual{'\n'}
{'\n'}
Sejarah terbentuknya Pengadilan Agama Tual bermula dari pasal 12 Peraturan Pemerintah Nomor 45 Tahun 1957 tentang pembentukan Pengadilan Agama / Mahkamah Syariah di luar Jawa dan Madura, yang kemudian ditindaklanjuti Surat Keputusan Menteri Agama Nomor 23 Tahun 1960, tanggal 14 November 1960, tentang pembentukan Pengadilan Agama Tual. Akan tetapi karena sesuatu dan lain hal, maka perealisasian dari Surat Keputusan Menteri Agama tersebut baru dapat dilaksanakan pada tanggal 28 Juni 1976 yang ditandai dengan pembukaan Kantor Pengadilan Agama Tual yang dipimpin oleh Amiruddin Tjima, BA berdasarkan Surat Penunjukan Ketua Pengadilan Tinggi Agama di Ujung Pandang, nomor A/2/210, tanggal 24 Mei 1976.
{'\n'}
{'\n'}
Pengadilan Agama Tual pada awal berdirinya berkantor di Jl. Apollo Tual pada sebuah rumah kontrakan, lalu pindah ke kantor baru di Jl. Jenderal Sudirman. Pada bulan Maret 1999 saat terjadi kerusuhan bernuansa SARA di Tual, Kantor Pengadilan Agama Tual menjadi sasaran amuk massa hingga rusak berat dan tidak dapat difungsikan lagi. Sejak kerusuhan tersebut Pengadilan Agama Tual kembali mengontrak rumah tinggal penduduk di jalan Pattimura untuk menjalankan aktivitas kesehariannya. Hingga akhirnya menempati kantor yang terletak di Jl. Baldu Wahadat, Kecamatan Pulau Dullah Selatan, Kota Tual. Seiring dengan perkembangan reformasi birokrasi dan hukum di Indonesia, Pengadilan Agama Tual di tahun 2012 memperoleh anggaran pembangunan gedung berprototype Mahkamah Agung. Kini sejak tanggal 19 September 2013 Pengadilan Agama Tual telah kembali menempati kantor baru di Jl. Jenderal Soedirman, Ohoijang-Langgur.</Text>
        </View>

      </ScrollView>

    </View>
  )
}

export default HalamanSejarahPengadilan

const styles = StyleSheet.create({})