import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Colors, {images, fonts} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import mainStyle from '../../styles';
import Button from '../../../components/button';
const Welcome = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ImageBackground
      source={images.back}
      resizeMode="cover"
      style={[mainStyle.backimg, {paddingTop: hp(15)}]}>
      <Text style={mainStyle.welcome}>Welcome to 👋</Text>
      <Image source={images.logo} resizeMode="contain" style={styles.img} />
      <Text style={styles.des}>
        Your Trusted Companion for Pet-{'\n'}Friendly Travel
      </Text>

      <Button
        text="Sign In"
        btom="2"
        removeback={true}
        mov={() => navigation.navigate('signin')}
      />

      <Button text="Sign Up" mov={() => navigation.navigate('signup')} />
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  img: {
    width: wp(60),
    height: wp(60),
    alignSelf: 'center',
    marginTop: hp(1),
  },

  des: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: fonts.semibold,
    textAlign: 'center',
    marginTop: hp(3.5),
    marginBottom: hp(8),
    textAlign: 'center',
  },
});
