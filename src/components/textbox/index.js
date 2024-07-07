import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  plac,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors, {images, fonts} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const index = ({
  val,
  onchan,
  plac,
  top = '0%',
  btm = '0%',
  hig = '6.5%',
  wid = '90%',
  isimg = 'no',
  rad = 10,
  bcolor = Colors.input,
  eyes = false,
}) => {
  const [eye, seteye] = useState(eyes);
  return (
    <View
      style={[
        styles.main,
        {
          marginTop: hp(top),
          marginBottom: hp(btm),
          height: hp(hig),
          width: wp(wid),
          borderRadius: wp(rad),
          borderColor: bcolor,
        },
      ]}>
      <TextInput
        value={val}
        onChangeText={onchan}
        style={[
          styles.input,
          {
            height: hp(hig),
            width: wp(wid),
            paddingLeft: wp('5%'),
            paddingRight: isimg == 'yes' ? wp('12%') : wp('0%'),
            verticalAlign: hig > 6 ? 'top' : 'middle',
          },
        ]}
        placeholder={plac}
        placeholderTextColor={Colors.place}
        // multiline={false}
        keyboardType="default"
        secureTextEntry={eye ? true : false}
      />
      {plac == 'Enter Color Name' && isimg == 'yes' ? (
        <Image source={images.color} resizeMode="contain" style={styles.img} />
      ) : null}
      {(isimg == 'yes' && plac == 'Password') || plac == 'Confirm Password' ? (
        <TouchableOpacity
          onPress={() => seteye(!eye)}
          style={{
            position: 'absolute',
            marginTop: hp('1.7'),
            marginRight: wp('3.5'),
            right: 0,
          }}>
          <Icon
            name={eye ? 'eye-off-outline' : 'eye-outline'}
            // style={styles.icon}
            size={20}
            color={Colors.black}
          />
        </TouchableOpacity>
      ) : null}
      {(isimg == 'yes' &&
        plac !== 'Select Color' &&
        plac == 'Enter DOB Here') ||
      plac == 'Enter Date Here' ? (
        <Icon
          name={'calendar-blank-outline'}
          style={styles.icon}
          size={20}
          color={Colors.black}
        />
      ) : null}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    alignSelf: 'center',
    backgroundColor: Colors.inputback,
    borderWidth: 1,
  },
  icon: {
    width: wp('6.2'),
    height: wp('6.2'),
    position: 'absolute',
    marginTop: hp('1.8'),
    marginRight: wp('2'),
    right: 0,
  },
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    fontSize: 10,
  },
  img: {
    width: wp('10'),
    height: wp('10'),
    position: 'absolute',
    marginTop: hp('0.8'),
    marginRight: wp('2'),
    right: 0,
  },
});
