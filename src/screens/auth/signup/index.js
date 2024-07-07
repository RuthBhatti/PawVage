import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
import firestore from '@react-native-firebase/firestore';
import Loader from '../../../components/loader';

const Signup = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  const [first, setfirst] = useState('');
  const [last, setlast] = useState('');
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  const [con, setcon] = useState('');
  const [err, seterr] = useState('');
  const [loding, setloding] = useState(false);

  const handleValid = async () => {
    setloding(true);
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      mail.replace(/\s/g, ''),
    );
    if (first == '' || last == '' || mail == '' || pass == '' || con == '') {
      seterr('All fields are required');
      setloding(false);
    } else if (!valid) {
      seterr('Enter Valid Email Adress');
      setloding(false);
    } else if (pass != con) {
      seterr('Password and Confirm Password are not same');
      setloding(false);
    } else if (pass.length > 8 || con.length > 8) {
      seterr('Password must be at least 8 characters');
      setloding(false);
    } else {
      seterr('');
      const email = mail.toString().trim('');

      await auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(userCredential => {
          const useData = {
            id: userCredential.user.uid,
            firstname: first,
            lastname: last,
            email: mail,
          };

          firestore()
            .collection('users')
            .doc(userCredential.user.uid)
            .set(useData);

          setloding(false);
          navigation.navigate('home');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            seterr('That email address is already in use!');
            setloding(false);
          }
          if (error.code === 'auth/invalid-email') {
            seterr('That email address is invalid!');
            setloding(false);
          }
          console.error(error);
          setloding(false);
        });
    }
  };
  return (
    <ImageBackground
      source={images.back}
      resizeMode="cover"
      style={mainStyle.backimg}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={images.logo} resizeMode="contain" style={styles.img} />
        <Text style={mainStyle.welcome}>Sign up</Text>

        <Text style={mainStyle.belowtxt}>Please Sign up you account</Text>

        <TextBox
          top="3"
          isimg="no"
          plac="First Name"
          onchan={txt => setfirst(txt)}
          val={first}
        />

        <TextBox
          top="2"
          isimg="no"
          plac="Last Name"
          onchan={txt => setlast(txt)}
          val={last}
        />

        <TextBox
          top="2"
          isimg="no"
          plac="Email"
          onchan={txt => setmail(txt)}
          val={mail}
        />

        <TextBox
          top="2"
          isimg="yes"
          plac="Password"
          onchan={txt => setpass(txt)}
          val={pass}
          eyes={true}
        />

        <TextBox
          top="2"
          btm="5"
          isimg="yes"
          plac="Confirm Password"
          onchan={txt => setcon(txt)}
          val={con}
          eyes={true}
        />
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

        <Button text="Sign Up" top="1" btom="3" mov={() => handleValid()} />

        <Text style={styles.txt}>
          Do you have an account{' '}
          <Text
            style={styles.txt1}
            onPress={() => navigation.navigate('signin')}>
            Sign in
          </Text>
        </Text>
      </ScrollView>
      <Loader sts={loding} />
    </ImageBackground>
  );
};

export default Signup;

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
