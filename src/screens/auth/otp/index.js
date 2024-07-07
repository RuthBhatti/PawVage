import {
  Image,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Colors, {images, fonts} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import mainStyle from '../../styles';
import Button from '../../../components/button';
import TextBox from '../../../components/textbox';
const Otp = ({navigation}) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
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
      <SafeAreaView style={{marginTop: hp(6)}}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </SafeAreaView>
      <Button
        text="Send Code"
        top="6"
        btom="5"
        mov={() => navigation.navigate('confirm')}
      />
      <Text style={styles.resend}>Resend ( 10s )</Text>
    </ImageBackground>
  );
};

export default Otp;

const styles = StyleSheet.create({
  img: {
    width: wp(40),
    height: wp(40),
    alignSelf: 'center',
  },
  codeFieldRoot: {},
  cell: {
    width: wp(17),
    height: hp(8),
    lineHeight: 38,
    fontSize: 20,
    fontFamily: fonts.semibold,
    color: Colors.second,
    borderWidth: 1,
    borderColor: '#c0c0c075',
    textAlign: 'center',
    borderRadius: wp(2),
    marginRight: wp(2),
    textAlignVertical: 'center',
    backgroundColor: '#c0c0c075',
  },
  focusCell: {
    borderWidth: 1,
    borderColor: Colors.input,
    backgroundColor: Colors.white,
  },
  resend: {
    fontSize: 12,
    color: '#C0C0C0',
    fontFamily: fonts.semibold,
    textAlign: 'center',
  },
});
