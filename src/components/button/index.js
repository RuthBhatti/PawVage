import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color, {fonts} from '../../constants';

const index = ({
  text,
  removeback = false,
  mov,
  wid = '90%',
  top = '0',
  btom = '0',
  fnt = 16,
  hig = 6,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.box,
        {
          height: hp(hig),
          width: wp(wid),
          marginTop: hp(top),
          marginBottom: hp(btom),
          backgroundColor: removeback ? Color.white : Color.main,
          borderColor: Color.main,
        },
      ]}
      onPress={mov}>
      <Text
        style={[
          styles.boxText,
          {
            color: removeback ? Color.black : Color.white,
            fontSize: fnt,
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  box: {
    borderRadius: wp(10),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontFamily: fonts.medium,
    letterSpacing: 1,
  },
});
