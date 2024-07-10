import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Colors, { images, fonts } from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import mainStyle from '../../styles';
import { CountryPicker } from 'react-native-country-codes-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../../components/button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userAction } from '../../../redux/userdata';
import SplashScreen from 'react-native-splash-screen';
import ConfettiCannon from 'react-native-confetti-cannon'; // Import the ConfettiCannon component
const Home = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [suc, setSuc] = useState(false);
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [arrcode, setArrCode] = useState('');
  const form1 = useSelector(state => state?.user.form1);
  const form2 = useSelector(state => state?.user.form2);
  const form3 = useSelector(state => state?.user.form3);
  const form4 = useSelector(state => state?.user.form4);

  const kkk = useSelector(state => state?.user);

  const confettiRef = useRef(null);

  useEffect(() => {
    if (suc && confettiRef.current) {
      confettiRef.current.start();
    }
  }, [suc]);

  console.log('first', kkk);
  return (
    <ImageBackground
      source={images.homeback}
      resizeMode="cover"
      style={{
        flex: 1,
        paddingTop: hp(4),
        paddingHorizontal: wp(5),
      }}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: hp(2.5)}}>
        <View style={{width: wp(8)}} />
        <Text style={[mainStyle.welcome, {color: Colors.white, marginTop: hp(0)}]}>
          Home
        </Text>
        <TouchableOpacity onPress={() => dispatch(userAction.logout())}>
          <Icon1 name="logout-variant" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.drop} onPress={() => setShow(true)}>
        <Text style={styles.title}>
          {countryCode !== '' ? countryCode : 'Departing Country'}
        </Text>
        <Icon name="keyboard-arrow-down" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.drop} onPress={() => setArr(true)}>
        <Text style={styles.title}>
          {arrcode !== '' ? arrcode : 'Arriving Country'}
        </Text>
        <Icon name="keyboard-arrow-down" size={25} color="white" />
      </TouchableOpacity>
      <CountryPicker
        show={show}
        pickerButtonOnPress={item => {
          setCountryCode(item?.name.en);
          setShow(false);
        }}
        style={{
          dialCode: {
            display: 'none',
          },
        }}
      />
      <CountryPicker
        show={arr}
        pickerButtonOnPress={item => {
          setArrCode(item?.name.en);
          setArr(false);
        }}
        style={{
          dialCode: {
            display: 'none',
          },
        }}
      />
      <Text style={styles.reset} onPress={() => setModalVisible(true)}>
        Reset All
      </Text>
      <View style={[mainStyle.view1, {marginTop: hp(2)}]}>
        <Image
          source={form1 ? images.ok : images.not}
          resizeMode="cover"
          style={styles.img}
        />
        <TouchableOpacity onPress={() => navigation.navigate('location')}>
          <ImageBackground
            source={images.book}
            resizeMode="cover"
            style={{
              width: wp(75),
              height: hp(11.5),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.txt}>Book Vet appointment</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Image
        source={images.line}
        resizeMode="contain"
        style={[styles.line, {top: hp(-2.5)}]}
      />

      <View style={[mainStyle.view1, {marginTop: hp(2), top: hp(-7)}]}>
        <Image
          source={form2 ? images.ok : images.not}
          resizeMode="cover"
          style={styles.img}
        />
        <TouchableOpacity onPress={() => navigation.navigate('health')}>
          <ImageBackground
            source={images.health}
            resizeMode="cover"
            style={{
              width: wp(75),
              height: hp(11.5),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.txt}>Health Certificate</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Image
        source={images.line}
        resizeMode="contain"
        style={[styles.line, {top: hp(-9.5)}]}
      />
            <View style={[mainStyle.view1, {marginTop: hp(2), top: hp(-14)}]}>
        <Image
          source={form3 ? images.ok : images.not}
          resizeMode="cover"
          style={styles.img}
        />
        <TouchableOpacity onPress={() => navigation.navigate('noc')}>
          <ImageBackground
            source={images.book}
            resizeMode="cover"
            style={{
              width: wp(75),
              height: hp(11.5),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.txt}>No Objection Certificate</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Image
        source={images.line}
        resizeMode="contain"
        style={[styles.line, {top: hp(-16)}]}
      />

      <View style={[mainStyle.view1, {marginTop: hp(2), top: hp(-20.5)}]}>
        <Image
          source={form4 ? images.ok : images.not}
          resizeMode="cover"
          style={styles.img}
        />
        <TouchableOpacity onPress={() => setSuc(true)}>
          <ImageBackground
            source={images.arrive}
            resizeMode="cover"
            style={{
              width: wp(75),
              height: hp(11.5),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.txt}>Check Your Status</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.main}>
          <View style={styles.modalview}>
            <Image
              source={images.reset}
              resizeMode="contain"
              style={{width: wp(13), height: wp(13), alignSelf: 'center'}}
            />
            <Text style={styles.modaltxt}>Reset all forms Data</Text>
            <Text style={styles.modaltxt1}>
              Do you want to reset all forms Data
            </Text>
            <View style={[mainStyle.view1, {justifyContent: 'space-around'}]}>
              <Button
                text="Cancel"
                wid="35"
                fnt={14}
                hig={5}
                removeback={true}
                mov={() => setModalVisible(false)}
              />
              <Button
                text="Confirm"
                wid="35"
                fnt={14}
                hig={5}
                mov={() => {
                  dispatch(userAction.resetall());
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.free}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
      <Modal
      animationType="fade"
      transparent={true}
      visible={suc}
      onRequestClose={() => {
        dispatch(userAction.handleForm4());
        setSuc(false);
      }}>
      <View style={styles.main}>
        <View style={styles.modalview}>
          <Image
            source={images.sss}
            resizeMode="cover"
            style={{
              width: wp(80),
              height: wp(25),
              alignSelf: 'center',
            }}
          />
          <Text style={[styles.modaltxt, {color: 'green'}]}>
            Congratulations!
          </Text>
          <Text style={[styles.modaltxt1, {color: Colors.black}]}>
            Your application is approved and you can now travel with your pet.
          </Text>
          <ConfettiCannon
            ref={confettiRef}
            count={500}
            fadeOut
            explosionSpeed={0}
            origin={{ x: 0, y: 0 }}
            fallSpeed={5000} // Adjust this value to make the confetti fall slower
          />
        </View>
        <TouchableOpacity
          style={styles.free}
          onPress={() => {
            dispatch(userAction.handleForm4());
            setSuc(false);
          }}
        />
      </View>
    </Modal>
  </ImageBackground>
);
};
export default Home;

const styles = StyleSheet.create({
  drop: {
    width: wp(85),
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: wp(10),
    marginBottom: hp(2),
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: Colors.white,
  },
  reset: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: '#4C4C4C',
    marginTop: hp(5),
    textAlign: 'right',
  },
  img: {
    width: wp(10),
    height: wp(10),
  },
  txt: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: Colors.white,
    paddingLeft: wp(22),
    width: wp(75),
    textAlign: 'left',
  },
  line: {
    width: wp(10),
    height: hp(8),
    tintColor: 'black',
  },
  modalview: {
    width: wp(90),
    height: hp(25),
    backgroundColor: Colors.white,
    borderRadius: wp(2),
    marginTop: hp(2),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
  },
  main: {
    flex: 1,
    alignSelf: 'center',
  },
  free: {
    width: wp(90),
    height: hp(75),
  },
  modaltxt: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: Colors.black,
    textAlign: 'center',
    marginTop: hp(2),
    marginBottom: hp(0.5),
  },
  modaltxt1: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: '#B6B6B6',
    textAlign: 'center',
    marginBottom: hp(2),
  },
});
