import axios from 'axios';
import { StyleSheet, StatusBar, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors, { images, fonts } from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import mainStyle from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Entypo';
import TextBox from '../../../components/textbox';
import Button from '../../../components/button';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';
import { userAction } from '../../../redux/userdata';
const Noc = ({ navigation }) => {
  const dispatch = useDispatch();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [country, setcountry] = useState('');

  const [name, setname] = useState('');
  const [tellno, settellno] = useState('');

  const [mail, setmail] = useState('');
  const [dateofim, setdateofim] = useState('');
  const [list, setlist] = useState('');
  const [purpose, setpurpose] = useState('');
  const [entry, setentry] = useState('');
  const [dogname, setdogname] = useState('');
  const [dogsex, setdogsex] = useState('');
  const [dogbreed, setdogbreed] = useState('');
  const [dib, setdib] = useState('');
  const [mic, setmic] = useState('');
  const [orgin, setorgin] = useState('');
  const [color, setcolor] = useState('');
  const [curdate, setcurdate] = useState('');
  const [sign, setsign] = useState('');
  const [meddate, setmeddate] = useState('');
  const [medsign, setmedsign] = useState('');

  const handleForm = () => {
    const formData = {
      country,
      name,
      tellno,
      mail,
      dateofim,
      list,
      purpose,
      entry,
      dogname,
      dogsex,
      dogbreed,
      dib,
      mic,
      orgin,
      color,
      curdate,
      sign,
      meddate,
      medsign
    };

    axios.post('http://10.0.2.2:8080/api/noc-form', formData)
      .then(response => {
        console.log(response.data);
        // Dispatch action and navigate
        dispatch(userAction.handleForm3());
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
      {/* <View style={[mainStyle.view1, { marginBottom: hp(2) }]}>
        <Icon name="arrow-back-ios" size={18} color="black" />
        <Text style={styles.title}>Health Certificate </Text>
        <View style={{ width: wp(10) }} />
      </View> */}
      <View style={[mainStyle.view1, { marginBottom: hp(2) }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={18} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Health Certificate</Text>
        <View style={{ width: wp(10) }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(2) }}>
        <Text style={styles.mainhead}>Annexure-1.1</Text>
        <Text style={[styles.txt, { marginTop: hp(3) }]}>
          Department of Animal husbandry and dairying
        </Text>
        <Text style={styles.txt}>
          Ministry of Fisheries, Animal husbandry and dairying
        </Text>
        <Text style={styles.txt}>Govt of India</Text>
        <View style={styles.line} />
        <View style={styles.circle} />
        <View style={mainStyle.view1}>
          <Text style={[styles.animal, { width: wp(38) }]}>
            Animal Quarantine and{'\n'}Certification Services
          </Text>
          <Text style={[styles.animal, { textAlign: 'right' }]}>
            Livestock importation Act, 1898{'\n'}Amended in 2001
          </Text>
        </View>
        <Text style={styles.red}>
          Application Form for obtaining No Objection Certificate from Animal
          Quarantine and Certification Services, India for imform of Pet Dog(s)
        </Text>
        <View
          style={{
            backgroundColor: '#F6F6F6',
            marginTop: hp(2),
            borderRadius: wp(3),
            paddingVertical: hp(2),
            paddingHorizontal: wp(3),
          }}>
          <Text style={styles.head}>
            1. Animal Quarantine and Certification Services
          </Text>

          <View style={[mainStyle.view1, { marginTop: hp(1) }]}>
            <View style={styles.box}>
              <Text style={styles.boxtxt}>New Dehli</Text>
              <CheckBox
                disabled={false}
                value={country == 'New Dehli' ? true : false}
                onValueChange={newValue =>
                  newValue ? setcountry('New Dehli') : null
                }
                tintColors={{ true: Colors.main, false: Colors.third }}
              />
            </View>
            <View style={styles.box}>
              <Text style={styles.boxtxt}>Mumbai</Text>
              <CheckBox
                disabled={false}
                value={country == 'Mumbai' ? true : false}
                onValueChange={newValue =>
                  newValue ? setcountry('Mumbai') : null
                }
                tintColors={{ true: Colors.main, false: Colors.third }}
              />
            </View>
          </View>
          <View style={[mainStyle.view1, { marginTop: hp(1) }]}>
            <View style={styles.box}>
              <Text style={styles.boxtxt}>Bangalore</Text>
              <CheckBox
                disabled={false}
                value={country == 'Bangalore' ? true : false}
                onValueChange={newValue =>
                  newValue ? setcountry('Bangalore') : null
                }
                tintColors={{ true: Colors.main, false: Colors.third }}
              />
            </View>
            <View style={styles.box}>
              <Text style={styles.boxtxt}>Hyderabad</Text>
              <CheckBox
                disabled={false}
                value={country == 'Hyderabad' ? true : false}
                onValueChange={newValue =>
                  newValue ? setcountry('Hyderabad') : null
                }
                tintColors={{ true: Colors.main, false: Colors.third }}
              />
            </View>
          </View>
          <View style={[mainStyle.view1, { marginTop: hp(1) }]}>
            <View style={styles.box}>
              <Text style={styles.boxtxt}>Chennai</Text>
              <CheckBox
                disabled={false}
                value={country == 'Chennai' ? true : false}
                onValueChange={newValue =>
                  newValue ? setcountry('Chennai') : null
                }
                tintColors={{ true: Colors.main, false: Colors.third }}
              />
            </View>
            <View style={styles.box}>
              <Text style={styles.boxtxt}>Kolkata</Text>
              <CheckBox
                disabled={false}
                value={country == 'Kolkata' ? true : false}
                onValueChange={newValue =>
                  newValue ? setcountry('Kolkata') : null
                }
                tintColors={{ true: Colors.main, false: Colors.third }}
              />
            </View>
          </View>
        </View>
        <Text style={styles.subhead}>Name & Address of the Applicant</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac=""
          onchan={txt => setname(txt)}
          val={name}
        />
        <View style={mainStyle.view1}>
          <View>
            <Text style={styles.subhead}>Tell No</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => settellno(txt)}
              val={tellno}
            />
          </View>
          <View>
            <Text style={styles.subhead}>Email ID</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setmail(txt)}
              val={mail}
            />
          </View>
        </View>
        <Text style={styles.subhead}>Date of Import</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac=""
          onchan={txt => setdateofim(txt)}
          val={dateofim}
        />

        <View
          style={{
            backgroundColor: '#F6F6F6',
            marginTop: hp(2),
            borderRadius: wp(3),
            paddingVertical: hp(2),
            paddingHorizontal: wp(3),
          }}>
          <Text style={styles.head}>List of Enclosure Attached:</Text>

          <View style={[styles.box, { width: wp(85), marginTop: hp(1) }]}>
            <Text style={[styles.boxtxt, { width: wp(74) }]}>
              Annexure 1.1.1- Veterinary Health Certificate for Pet Dogs
            </Text>
            <CheckBox
              disabled={false}
              value={list == '1' ? true : false}
              onValueChange={newValue => (newValue ? setlist('1') : null)}
              tintColors={{ true: Colors.main, false: Colors.third }}
            />
          </View>
          <View style={[styles.box, { width: wp(85), marginTop: hp(1) }]}>
            <Text style={[styles.boxtxt, { width: wp(74) }]}>
              Pet Passport/ Pet book / Pet Health Card
            </Text>
            <CheckBox
              disabled={false}
              value={list == '2' ? true : false}
              onValueChange={newValue => (newValue ? setlist('2') : null)}
              tintColors={{ true: Colors.main, false: Colors.third }}
            />
          </View>
          <View style={[styles.box, { width: wp(85), marginTop: hp(1) }]}>
            <Text style={[styles.boxtxt, { width: wp(74) }]}>
              Flight ticket ? Airway Bill / Seaway Bill
            </Text>
            <CheckBox
              disabled={false}
              value={list == '3' ? true : false}
              onValueChange={newValue => (newValue ? setlist('3') : null)}
              tintColors={{ true: Colors.main, false: Colors.third }}
            />
          </View>
        </View>

        <Text style={styles.subhead}>Purpose of the Import</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac=""
          onchan={txt => setpurpose(txt)}
          val={purpose}
        />

        <Text style={styles.subhead}>
          Hall of entry issued by the Customs ( If Applicable )
        </Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac=""
          onchan={txt => setentry(txt)}
          val={entry}
        />

        <Text
          style={[styles.mainhead, { textAlign: 'left', marginVertical: hp(2) }]}>
          Description oof Dog(s)
        </Text>
        <Text style={styles.subhead}>Name</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac="Enter Name Here"
          onchan={txt => setdogname(txt)}
          val={dogname}
        />
        <Text style={styles.subhead}>Sex</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac="Enter Sex Here"
          onchan={txt => setdogsex(txt)}
          val={dogsex}
        />
        <Text style={styles.subhead}>Breed</Text>
        <TextBox
          top="1"
          isimg="no"
          bcolor="#ECECEC"
          rad={3}
          plac="Enter Breed Here"
          onchan={txt => setdogbreed(txt)}
          val={dogbreed}
        />
        <Text style={styles.subhead}>Date of Birth</Text>
        <TextBox
          top="1"
          bcolor="#ECECEC"
          rad={3}
          isimg="yes"
          plac="Enter DOB Here"
          onchan={txt => setdib(txt)}
          val={dib}
        />

        <Text style={styles.subhead}>Microchip No</Text>
        <TextBox
          top="1"
          bcolor="#ECECEC"
          rad={3}
          isimg="no"
          plac="Enter Microchip no Here"
          onchan={txt => setmic(txt)}
          val={mic}
        />
        <Text style={styles.subhead}>Country of Origin</Text>
        <TextBox
          top="1"
          bcolor="#ECECEC"
          rad={3}
          isimg="no"
          plac="Enter country of Origin"
          onchan={txt => setorgin(txt)}
          val={orgin}
        />
        <Text style={styles.subhead}>Color</Text>
        <TextBox
          top="1"
          bcolor="#ECECEC"
          rad={3}
          isimg="yes"
          plac="Enter Color Name"
          onchan={txt => setcolor(txt)}
          val={color}
        />
        <Text style={styles.subhead}>General Description</Text>
        <Text
          style={[
            styles.boxtxt,
            { fontFamily: fonts.regular, marginTop: hp(1) },
          ]}>
          I{'\n'}
          (Mr./Mrs/{'\n'}
          Miss).............................................................................
          {'\n'}
          am an applicant for import of dog(s) mentioned above and declare that
          the information furnished on this form, to best of my knowledge and
          belief are true, correct and complete in every respect.
        </Text>
        <View style={mainStyle.view1}>
          <View>
            <Text style={styles.subhead}>Date</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="yes"
              bcolor="#ECECEC"
              rad={3}
              plac="Enter Date Here"
              onchan={txt => setcurdate(txt)}
              val={curdate}
            />
          </View>
          <View>
            <Text style={styles.subhead}>Sign</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setsign(txt)}
              val={sign}
            />
          </View>
        </View>
        <Text style={[styles.title, { marginTop: hp(2) }]}>
          Medical Condition Declaration (if Applicable)
        </Text>
        <Text
          style={[
            styles.boxtxt,
            { fontFamily: fonts.regular, marginTop: hp(1) },
          ]}>
          It is declared that dog(s) mentioned above are under supervision of a
          registered Veterinarian. Details of clinical condition and medication
          is mentioned in the health card (attached with this form)
        </Text>
        <View style={mainStyle.view1}>
          <View>
            <Text style={styles.subhead}>Date</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="yes"
              bcolor="#ECECEC"
              rad={3}
              plac="Enter Date Here"
              onchan={txt => setmeddate(txt)}
              val={meddate}
            />
          </View>
          <View>
            <Text style={styles.subhead}>Sign</Text>
            <TextBox
              top="1"
              wid="43"
              isimg="no"
              bcolor="#ECECEC"
              rad={3}
              plac=""
              onchan={txt => setmedsign(txt)}
              val={medsign}
            />
          </View>
        </View>
        <Text style={[styles.title, { marginTop: hp(2) }]}>
          For Official Use Only
        </Text>
        <Text style={[styles.boxtxt, { fontFamily: fonts.regular }]}>
          1. Acknowledgement No.
        </Text>
        <Text style={[styles.boxtxt, { fontFamily: fonts.regular }]}>
          2. Unfit for Clearance on Account of Deficiency in.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: wp(2),
            marginTop: hp(1),
          }}>
          <Icon1 name="dot-single" size={10} color="black" />
          <Text style={[styles.boxtxt, { fontFamily: fonts.regular }]}>
            Veterinary Health Certificate for Pet dogs
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: wp(2),
          }}>
          <Icon1 name="dot-single" size={10} color="black" />
          <Text style={[styles.boxtxt, { fontFamily: fonts.regular }]}>
            Pet passport/ Pet book/ Pet health card
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: wp(2),
          }}>
          <Icon1 name="dot-single" size={10} color="black" />
          <Text style={[styles.boxtxt, { fontFamily: fonts.regular }]}>
            Flight Ticket/ Airway bill/ seaway bill Application format
          </Text>
        </View>

        <Button text="Submit" top="3" mov={() => handleForm()} />
      </ScrollView>
    </View>
  );
};

export default Noc;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: wp(5),
    paddingTop: hp(6),
  },
  mainhead: {
    fontSize: 13,
    fontFamily: fonts.semibold,
    color: Colors.black,
    textAlign: 'right',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: Colors.black,
  },
  txt: {
    fontSize: 10,
    fontFamily: fonts.regular,
    color: '#0078E7',
    textAlign: 'right',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    width: wp(90),
    marginVertical: hp(3),
  },
  circle: {
    width: wp(13),
    height: wp(13),
    borderRadius: wp(7),
    backgroundColor: '#EAEAEA',
  },
  animal: {
    fontSize: 10,
    fontFamily: fonts.medium,
    color: Colors.black,
    width: wp(46),
  },
  red: {
    fontSize: 9,
    fontFamily: fonts.semibold,
    color: 'red',
    marginTop: hp(2),
    textAlign: 'center',
  },
  head: {
    fontSize: 10,
    fontFamily: fonts.semibold,
    color: Colors.black,
  },
  box: {
    width: wp(40),
    height: hp(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: '#EAEAEA',
    paddingHorizontal: wp(2),
  },
  boxtxt: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: Colors.black,
  },
  subhead: {
    fontSize: 12,
    fontFamily: fonts.semibold,
    color: Colors.black,
    marginTop: hp(2),
  },
});
