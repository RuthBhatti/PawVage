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
import auth from '@react-native-firebase/auth';

const Forgot = ({navigation}) => {
  const [mail, setmail] = useState('');
  const handleEmail = async () => {
    await auth()
      .sendPasswordResetEmail(mail)
      .then(function () {
        // Password reset email sent.
        console.log('Password reset email sent successfully.');
        navigation.navigate('signin');
      })
      .catch(function (error) {
        // Error occurred. Inspect error.code and error.message.
        console.log(':L:L', JSON.stringify(error));
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
        navigation.navigate('signin');
      });
  };
  return (
    <ImageBackground
      source={images.back}
      resizeMode="cover"
      style={mainStyle.backimg}>
      <Image source={images.logo} resizeMode="contain" style={styles.img} />
      <Text style={mainStyle.welcome}>Forgot Password</Text>

      <Text style={mainStyle.belowtxt}>
        A Code to reset your password will be sent {'\n'}to your email
      </Text>

      <TextBox
        top="5"
        isimg="no"
        plac="Enter Email"
        onchan={txt => setmail(txt)}
        val={mail}
      />

      <Button text="Send Link" top="6" mov={() => handleEmail()} />
    </ImageBackground>
  );
};

export default Forgot;

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
