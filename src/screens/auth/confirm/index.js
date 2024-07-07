import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors, {images, fonts} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import mainStyle from '../../styles';
import Button from '../../../components/button';
import TextBox from '../../../components/textbox';

const Confirm = ({navigation}) => {
  return (
    <ImageBackground
      source={images.back}
      resizeMode="cover"
      style={mainStyle.backimg}>
      <Image source={images.logo} resizeMode="contain" style={styles.img} />
      <Text style={mainStyle.welcome}>Reset Password</Text>

      <Text style={mainStyle.belowtxt}>Please enter your new password</Text>

      <TextBox top="5" isimg="yes" plac="Password" />
      <TextBox top="2" isimg="yes" plac="Confirm Password" />

      <Button text="Confirm" top="10" mov={() => navigation.navigate('otp')} />
    </ImageBackground>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  img: {
    width: wp(40),
    height: wp(40),
    alignSelf: 'center',
  },
  txt: {
    fontSize: 12,
    color: Colors.black,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  txt1: {
    fontSize: 12,
    color: Colors.black,
    fontFamily: fonts.semibold,
  },
});
