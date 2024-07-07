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
import CheckBox from '@react-native-community/checkbox';
import Loader from '../../../components/loader';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {userAction} from '../../../redux/userdata';

const Signin = ({navigation}) => {
  const dispatch = useDispatch();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  const [err, seterr] = useState('');
  const [loding, setloding] = useState(false);
  const handleValid = async () => {
    setloding(true);
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      mail.replace(/\s/g, ''),
    );
    if (mail == '' || pass == '') {
      seterr('All fields are required');
      setloding(false);
    } else if (!valid) {
      seterr('Enter Valid Email Adress');
      setloding(false);
    } else {
      seterr('');
      const email = mail.toString().trim('');
      await auth()
        .signInWithEmailAndPassword(email, pass)
        .then(userCredential => {
          dispatch(userAction.userauth());
          console.log(
            'User Login Succefuly',
            userCredential.additionalUserInfo,
          );
          setloding(false);
          navigation.navigate('home');
        })
        .catch(error => {
          if (error.code === 'auth/invalid-credential') {
            seterr('Tha email or password is incorrect');
            setloding(false);
          }
          setloding(false);
        });
    }
  };

  return (
    <ImageBackground
      source={images.back}
      resizeMode="cover"
      style={mainStyle.backimg}>
      <Image source={images.logo} resizeMode="contain" style={styles.img} />
      <Text style={mainStyle.welcome}>Login With Email</Text>

      <Text style={mainStyle.belowtxt}>
        Please login you account with your email
      </Text>

      <TextBox
        top="5"
        isimg="no"
        plac="Enter Email"
        onchan={txt => setmail(txt)}
        val={mail}
      />
      <TextBox
        top="2"
        isimg="yes"
        plac="Password"
        eyes={true}
        onchan={txt => setpass(txt)}
        val={pass}
      />
      <View style={[mainStyle.view1, {marginBottom: hp(4)}]}>
        <View style={mainStyle.view2}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: Colors.main, false: Colors.third}}
          />
          <Text style={mainStyle.txt}>Remember me</Text>
        </View>
        <Text
          style={mainStyle.txt}
          onPress={() => navigation.navigate('forgot')}>
          Forgot Password?
        </Text>
      </View>
      {err ? (
        <Text
          style={{
            color: 'red',
            fontSize: 12,
            fontFamily: fonts.regular,
            textAlign: 'center',
          }}>
          {err}
        </Text>
      ) : null}
      <Button text="Sign In" top="1" btom="6" mov={() => handleValid()} />

      <Text style={styles.txt}>
        Don’t have an account?{' '}
        <Text style={styles.txt1} onPress={() => navigation.navigate('signup')}>
          Sign up
        </Text>
      </Text>
      <Loader sts={loding} />
    </ImageBackground>
  );
};

export default Signin;

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
