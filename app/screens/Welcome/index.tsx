import React, { useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SplashScreen } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // padding: 20
  },
  contents: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 16
  },
  firstTitle: {
    fontSize: 14,
    color: '#271756',
    fontWeight: 'bold'
  },
  secondTitle: {
    fontSize: 18,
    color: '#2f70ac',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

export default function Welcome() {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Home")
  }

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
      // SplashScreen.hideAsync()
    }, 5000)
  });

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Pressable onPress={navigateToHome}>
          <Image style={styles.img} source={{ uri: "https://u2210-dev.dttt.vn/admin/assets/environments/logo.png" }} />
        </Pressable>
        <Text style={styles.firstTitle}>Trường Đào tạo và Phát triển Nguồn nhân lực VIETINBANK</Text>
        <Text style={styles.secondTitle}>HỆ THỐNG QUẢN TRỊ TỔNG THỂ</Text>
      </View>
    </View>
  );
}

