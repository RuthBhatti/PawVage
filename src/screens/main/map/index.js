import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Colors, {images, fonts} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import mainStyle from '../../styles';
import Button from '../../../components/button';
import {useDispatch} from 'react-redux';
import {userAction} from '../../../redux/userdata';
const Location = ({navigation}) => {
  const dispatch = useDispatch();
  const [val, setval] = useState('');
  const [modal, setmodal] = useState(false);
  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />

      <MapView
        zoomEnabled={true}
        showsUserLocation={true}
        userInterfaceStyle="dark"
        mapType="standard"
        style={{flex: 1}}
        initialRegion={{
          latitude: 40.9455,
          longitude: -72.9332,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 40.9449, longitude: -72.9283}}
          onPress={() => setmodal(true)}
          style={{width: wp(10), height: wp(10)}}>
          <Image
            source={images.pin}
            style={{width: wp(10), height: wp(10)}}
            resizeMode="contain"
          />
        </Marker>
        <Marker
          coordinate={{latitude: 40.9456, longitude: -72.9336}}
          style={{width: wp(10), height: wp(10)}}
          onPress={() => setmodal(true)}>
          <Image
            source={images.pin}
            style={{width: wp(10), height: wp(10)}}
            resizeMode="contain"
          />
        </Marker>
        <Marker
          coordinate={{latitude: 40.9455, longitude: -72.9332}}
          onPress={() => setmodal(true)}
          style={{width: wp(10), height: wp(10)}}>
          <Image
            source={images.pin}
            style={{width: wp(10), height: wp(10)}}
            resizeMode="contain"
          />
        </Marker>
      </MapView>
      <View style={styles.inputview}>
        <Icon name="search" size={20} color="black" />
        <TextInput
          value={val}
          onChange={txt => setval(txt)}
          placeholder="Search Location"
          placeholderTextColor={'#1E1E1E'}
          style={styles.input}
        />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => setmodal(false)}>
        <View style={styles.main}>
          <View style={styles.modalview}>
            <Image
              source={images.mapa}
              resizeMode="contain"
              style={{
                width: wp(83),
                height: wp(55),
                alignSelf: 'center',
                borderRadius: wp(3),
                marginBottom: hp(2),
              }}
            />
            <View style={styles.subfle}>
              <Icon1 name="location-outline" size={18} color={Colors.main} />
              <Text style={styles.modaltxt1}>
                346 Rte 25A #140, Rocky Point, NY 11778
              </Text>
            </View>
            <View style={styles.subfle}>
              <Icon1 name="time-outline" size={18} color={Colors.main} />
              <Text style={styles.modaltxt1}>Closed {'  '} Open 9 AM Fri</Text>
            </View>
            <View style={styles.subfle}>
              <Icon2 name="web" size={18} color={Colors.main} />
              <Text style={styles.modaltxt1}>rockyshoressvet.com</Text>
            </View>
            <View style={styles.subfle}>
              <Icon name="phone" size={18} color={Colors.main} />
              <Text style={styles.modaltxt1}>(631) 821-1376</Text>
            </View>
            <Button
              text="Call"
              wid="80"
              fnt={14}
              hig={5}
              top="2"
              mov={() => {
                dispatch(userAction.handleForm1());
                navigation.navigate('home');
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.free}
            onPress={() => setmodal(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputview: {
    backgroundColor: Colors.white,
    borderRadius: wp(5),
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    width: wp(90),
    height: hp(6),
    alignItems: 'center',
    marginTop: hp(6),
    paddingHorizontal: wp(3),
  },
  input: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: Colors.black,
    width: wp(75),
    marginLeft: wp(2),
  },
  modalview: {
    width: wp(90),
    height: hp(50),
    backgroundColor: Colors.white,
    borderRadius: wp(2),
    marginTop: hp(2),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    elevation: 5,
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
    color: Colors.black,
    marginLeft: wp(3),
  },
  subfle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.7),
  },
});
