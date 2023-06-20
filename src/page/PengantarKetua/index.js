import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { PaluSidang } from '../../assets'

const HalamanPengantarKetuaPengadilanAgamaTual = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      
      <ScrollView>
        <View style={{padding:10, alignItems:'center'}}>
            <Text style={{fontFamily:'Poppins-Bold', fontSize:20, textAlign:'center'}}>Pengantar Ketua Pengadilan Agama Tual</Text>
        </View>

        <View style={{padding:10, alignItems:'center'}}>
            <Image style={{width:100, height:100}} source={PaluSidang}/>
        </View>

        <View style={{padding:10,}}>
 <Text style={{fontFamily:'Poppins-Regular', textAlign:'left'}}>Bismillahirrahmanirrahim,</Text>
 
 <Text style={{fontFamily:'Poppins-Regular', textAlign:'left', fontSize:13}}>Assalamu'alaikum warahmatullahi wabarakatuh,{'\n'}</Text>

  <Text style={{fontFamily:'Poppins-Regular', textAlign:'justify', }}>Pemerintah telah mencanangkan program “good governance” (tata pemerintahan yang baik) yang salah tata pilar utamanya adalah transparansi (keterbukaan). Dalam konteks tersebut ada 3 hak publik yang relevan dan terkait dengan prinsip keterbukaan, yaitu :{'\n'}
{'\n'}
1. Hak publik untuk memantau dan mengamati perilaku pejabat publik;{'\n'}
2. Hak publik atas informasi;{'\n'}
3. Hak untuk mengajukan keberatan.{'\n'}
{'\n'}
Untuk menjamin terpenuhinya hak publik di atas, Pengadilan Agama Tual berdasarkan Keputusan Ketua Mahkamah Agung RI Nomor : 1-144/KMA/SK/I/ 2011, tentang Pedoman Pelayanan Informmasi di Pengadilan, berupaya semaksimal mungkin membuka dan memberikan informasi yang mudah (accestable) dan terpercaya (credible). Eksistensi situs resmi Pengadilan Agama Tual yang launchingnya dilakukan oleh Ketua Pengadilan Tinggi Agama Maluku di Ambon pada tanggal 3 Nopember 2009 ini adalah salah satu cara untuk merealisasikan pememenuhan ketiga hak publik tersebut. Disamping itu, eksistensi situs ini dimaksudkan agar menjadi sarana bagi kami, segenap aparatur Pengadilan Agama Tual untuk belajar memberikan kontribusi dan manfaat seluas-luasnya bagi percepatan reformasi peradilan menuju peradilan moderen yang diharapkan.{'\n'}
{'\n'}
Dalam situs ini kami berupaya menyajikan informasi yang terkait dengan seluk beluk Pengadilan Agama Tual, baik mengenai struktur organisasinya, profil pejabat, yurisdiksi (kewenangan) berikut peta wilayah yurisdiksinya, hingga berbagai masalah yang terkait dengan persidangan dan perkara, bahkan transparansi atas relaisasi anggaran (DIPA).{'\n'}
{'\n'}
Kami tahu bahwa para pengunjung dan pengguna Pengadilan Agama Tual disamping para pihak yang menginginkan keadilan dan kepastian hukum, ada juga anggota masyarakat lain yang menginginkan pelayanan informasi prima, seperti mahasiswa yang ingin melakukan penelitian, instansi pemerintah yang memerlukan data, masyarakat umum yang ingin berkonsultasi, bahkan para wartawan yang ingin mencari berita ataupun klarifikasi, semuanya menginginkan pelayanan informasi yang prima. Namun kami sadar bahwa pada tahap permulaan ini kami belum bisa memuaskan semua kepentingan anggota masyarakat tersebut karena kekurangan dan keterbatasan yang ada pada kami. Namun insya Allah kami akan terus belajar untuk terus menerus memperbaiki semua kekurangan yang ada pada situs kami, sehingga pada saatnya nanti mudah-mudahan seiring dengan kemajuan yang dicapai Pengadilan Agama Tual, situs ini akan menjadi semakin baik dan menarik.{'\n'}
{'\n'}
Akhirnya tak lupa kami sampaikan terima kasih dan apresiasi kami kepada para pimpinan Mahkamah Agung Republik Indonesia, khususnya Direktur Jenderal Badan Peradilan Agama yang senantiasa memotivasi, serta menyediakan anggaran yang cukup memadai guna pengembangan Teknologi Informasi (TI) di lingkungan Peradilan Agama. Terima kasih kami juga kepada Bapak Ketua Pengadilan Tinggi Agama Ambon dan semua pihak yang peduli percepatan reformasi peradilan melalui teknologi informasi. Semoga Allah SWT senantiasa menuntun kita semua untuk memberikan manfaat sebesar-besarnya kepada bangsa dan negara kita tercinta, amin.{'\n'}
{'\n'}
 <Text style={{fontFamily:'Poppins-Regular', textAlign:'left', fontSize:13}}>Assalamu'alaikum warahmatullahi wabarakatuh,{'\n'}{'\n'}</Text>
  <Text style={{fontFamily:'Poppins-Regular', textAlign:'left', fontSize:13}}>Tual.{'\n'}{'\n'}</Text>
    <Text style={{fontFamily:'Poppins-Bold', textAlign:'left', fontSize:13}}>Ketua Pengadilan Agama Tual{'\n'}{'\n'}</Text>
        <Text style={{fontFamily:'Poppins-Regular', textAlign:'left', fontSize:13}}>Ttd{'\n'}{'\n'}</Text>
            <Text style={{fontFamily:'Poppins-Bold', textAlign:'left', fontSize:13}}>Fahri Latukau, S.H.I., M.H{'\n'}{'\n'}</Text>
</Text>

        </View>

      </ScrollView>

    </View>
  )
}

export default HalamanPengantarKetuaPengadilanAgamaTual

const styles = StyleSheet.create({})