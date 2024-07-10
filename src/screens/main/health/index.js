import axios from 'axios';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Colors, { images, fonts } from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import mainStyle from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextBox from '../../../components/textbox';
import Button from '../../../components/button';
import { useDispatch } from 'react-redux';
import { userAction } from '../../../redux/userdata';
const Health = ({ navigation }) => {
  const dispatch = useDispatch();
  const [vet, setvet] = useState('');
  const [doi, setdoi] = useState('');
  const [certificate, setcertificate] = useState('');
  const [con1, setcon1] = useState('');
  const [con2, setcon2] = useState('');
  const [origin, setorigin] = useState('');
  const [state, setstate] = useState('');
  const [place, setplace] = useState('');
  const [port, setport] = useState('');
  const [estimated, setestimated] = useState('');
  const [transport, settransport] = useState('');
  const [permit, setpermit] = useState('');
  const [permit2, setpermit2] = useState('');
  const [des, setdes] = useState('');
  const [quant, setquant] = useState('');
  const [pack, setpack] = useState('');
  const [add, setadd] = useState('');
  const [seal, setseal] = useState('');
  const [commo, setcommo] = useState('');
  const [type, settype] = useState('');
  const [mic, setmic] = useState('');
  const [breed, setbreed] = useState('');
  const [dob, setdob] = useState('');
  const [sex, setsex] = useState('');
  const [color, setcolor] = useState('');
  const [ct, setct] = useState('');
  const handleForm = () => {
    const formData = {
      vet,
      doi,
      certificate,
      con1,
      con2,
      origin,
      state,
      place,
      port,
      estimated,
      transport,
      permit,
      permit2,
      des,
      quant,
      pack,
      add,
      seal,
      commo,
      type,
      mic,
      breed,
      dob,
      sex,
      color,
      ct
    };

    axios.post('http://10.0.2.2:8080/api/vet-form', formData)
      .then(response => {
        console.log(response.data);
        // Dispatch action and navigate
        dispatch(userAction. handleForm2());
        navigation.navigate('home');
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor={Colors.white}
        translucent
        barStyle="dark-content"
      />
      <View style={[mainStyle.view1, { marginBottom: hp(2) }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={18} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Health Certificate </Text>
        <View style={{ width: wp(10) }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(2) }}>
        <Text style={styles.mainhead}>
          Veterinary Health Certificate for export of dogs from the united State
          of America to India{' '}
        </Text>
        <Text style={styles.subhead}>Veterinary Authority</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac="UNITED STATE DEPARTMENT OF AGRICULTURE"
          onchan={txt => setvet(txt)}
          val={vet}
        />
        <View style={mainStyle.view1}>
          <View>
            <Text style={styles.subhead}>Date of Issue</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setdoi(txt)}
              val={doi}
            />
          </View>
          <View>
            <Text style={styles.subhead}>Certificate Number</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setcertificate(txt)}
              val={certificate}
            />
          </View>
        </View>

        <TextBox
          top="2"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          hig="10"
          plac="Consignor, Including phone Number & Email Address"
          onchan={txt => setcon1(txt)}
          val={con1}
        />
        <TextBox
          top="2"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          hig="10"
          plac="Consignee"
          onchan={txt => setcon2(txt)}
          val={con2}
        />
        <View style={mainStyle.view1}>
          <View>
            <Text style={styles.subhead}>Country of Origin</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setorigin(txt)}
              val={origin}
            />
          </View>
          <View>
            <Text style={styles.subhead}>State of Origin</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setstate(txt)}
              val={state}
            />
          </View>
        </View>
        <View style={mainStyle.view1}>
          <View>
            <Text style={styles.subhead}>Place of Origin</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setplace(txt)}
              val={place}
            />
          </View>
          <View>
            <Text style={styles.subhead}>Port of Embarkation</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setport(txt)}
              val={port}
            />
          </View>
        </View>
        <View style={mainStyle.view1}>
          <View>
            <Text style={styles.subhead}>Estimated date Shipment</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setestimated(txt)}
              val={estimated}
            />
          </View>
          <View>
            <Text style={styles.subhead}>{'   '}Means of Transport</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => settransport(txt)}
              val={transport}
            />
          </View>
        </View>
        <View style={mainStyle.view1}>
          <View>
            <Text style={styles.subhead}>CITES Pemit Number</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setpermit(txt)}
              val={permit}
            />
          </View>
          <View>
            <Text style={styles.subhead}></Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setpermit2(txt)}
              val={permit2}
            />
          </View>
        </View>
        <Text style={styles.subhead}>Description of Community</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac=""
          onchan={txt => setdes(txt)}
          val={des}
        />

        <View style={mainStyle.view1}>
          <View>
            <Text style={styles.subhead}>Total Quantity</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setquant(txt)}
              val={quant}
            />
          </View>
          <View>
            <Text style={styles.subhead}>Total Number of packages</Text>

            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setpack(txt)}
              val={pack}
            />
          </View>
        </View>
        <Text style={styles.subhead}>Additional Information</Text>
        <TextBox
          top="1"
          hig="10"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac=""
          onchan={txt => setadd(txt)}
          val={add}
        />
        <Text style={styles.subhead}>Identification / Seal Number</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac=""
          onchan={txt => setseal(txt)}
          val={seal}
        />

        <Text style={styles.subhead}>Commodities intended use</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac=""
          onchan={txt => setcommo(txt)}
          val={commo}
        />
        <Text style={styles.subhead}>Type of Admission</Text>
        <TextBox
          top="1"
          hig="10"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac=""
          onchan={txt => settype(txt)}
          val={type}
        />
        <View
          style={{
            backgroundColor: '#F6F6F6',
            marginTop: hp(2),
            borderRadius: wp(3),
            paddingVertical: hp(2),
            paddingHorizontal: wp(3),
          }}>
          <Text style={styles.mainhead}>Identification of commodities</Text>
          <View style={mainStyle.view1}>
            <View>
              <Text style={styles.subhead}>Microchip Number</Text>
              <TextBox
                top="1"
                wid="40"
                isimg="no"
                bcolor="#ECECEC"
                rad={3}
                plac=""
                onchan={txt => setmic(txt)}
                val={mic}
              />
            </View>
            <View>
              <Text style={styles.subhead}>Breed</Text>
              <TextBox
                top="1"
                wid="40"
                isimg="no"
                bcolor="#ECECEC"
                rad={3}
                plac=""
                onchan={txt => setbreed(txt)}
                val={breed}
              />
            </View>
          </View>

          <View style={mainStyle.view1}>
            <View>
              <Text style={styles.subhead}>DOB</Text>
              <TextBox
                top="1"
                wid="40"
                isimg="no"
                bcolor="#ECECEC"
                rad={3}
                plac=""
                onchan={txt => setdob(txt)}
                val={dob}
              />
            </View>
            <View>
              <Text style={styles.subhead}>Sex</Text>
              <TextBox
                top="1"
                wid="40"
                isimg="no"
                bcolor="#ECECEC"
                rad={3}
                plac=""
                onchan={txt => setsex(txt)}
                val={sex}
              />
            </View>
          </View>

          <View style={mainStyle.view1}>
            <View>
              <Text style={styles.subhead}>Color</Text>
              <TextBox
                top="1"
                wid="40"
                isimg="no"
                bcolor="#ECECEC"
                rad={3}
                plac=""
                onchan={txt => setcolor(txt)}
                val={color}
              />
            </View>
            <View>
              <Text style={styles.subhead}>CT</Text>
              <TextBox
                top="1"
                wid="40"
                isimg="no"
                bcolor="#ECECEC"
                rad={3}
                plac=""
                onchan={txt => setct(txt)}
                val={ct}
              />
            </View>
          </View>
        </View>

        <Button text="Submit " top="3" mov={() => handleForm()} />
      </ScrollView>
    </View>
  );
};

export default Health;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: wp(5),
    paddingTop: hp(6),
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: Colors.black,
  },
  mainhead: {
    fontSize: 13,
    fontFamily: fonts.semibold,
    color: Colors.black,
  },
  subhead: {
    fontSize: 12,
    fontFamily: fonts.semibold,
    color: Colors.black,
    marginTop: hp(2),
  },
});
