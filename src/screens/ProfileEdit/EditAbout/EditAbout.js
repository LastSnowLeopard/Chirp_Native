import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import PostHeader from "../../../components/PostHeader/PostHeader";
import { ADDCITY, ADDEDUCATION, ADDEVENTS, ADDRELATIONSHIP, ADDWORK } from "../../../constants/Navigation";
import { COLORS, H, IMAGES } from "../../../constants/StyleCommon";
import Line from "../Line";
import styles from './Styles'

const EditAbout = (props) => {

  const aboutData = useSelector((state) => state.user.aboutData)


  return (
    <SafeAreaView style={styles.mainContiner}>
      <ScrollView>
        <PostHeader TXT={'About'} {...props} />
        <View style={styles.middleContiner}>
          <Text style={styles.eduTxt}>Education</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate(ADDEDUCATION)} style={styles.btnContiner} >
            <Image tintColor={COLORS.PRIMARY} style={styles.imgstyle} resizeMode={'contain'} source={IMAGES.ADDBIO} />
            <Text style={styles.txtStyle}>Add Your Education</Text>
          </TouchableOpacity>
          {
            aboutData?.education?.map((item) => {
              return (
                <View style={styles.educationContiner}>
                  <View style={styles.educationContiner}>
                    <Image tintColor={COLORS.PRIMARY} style={styles.iconStyle} resizeMode={'contain'} source={IMAGES.EDUCATIONICON} />
                    <Text style={styles.txtStyles}>Studies at {item?.college}</Text>
                    <Text style={[styles.txtStyles, { color: COLORS.LIGHTBLACK }]}>{item?.relationship}</Text>
                  </View>
                  <TouchableOpacity>
                    <Image style={styles.iconStyle} resizeMode={'contain'} source={IMAGES.EDITBIO} />
                  </TouchableOpacity>
                </View>
              )
            })
          }
          <Line />
          <Text style={styles.eduTxt}>Work</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate(ADDWORK)} style={styles.btnContiner} >
            <Image tintColor={COLORS.PRIMARY} style={styles.imgstyle} resizeMode={'contain'} source={IMAGES.ADDBIO} />
            <Text style={styles.txtStyle}>Add Your Work</Text>
          </TouchableOpacity>

          {
            aboutData?.work?.map((item) => {
              return (
                <View style={styles.educationContiner}>
                  <View style={styles.educationContiner}>
                    <Image  tintColor={COLORS.PRIMARY} style={styles.iconStyle} resizeMode={'contain'} source={IMAGES.WORKICON} />
                    <Text style={styles.txtStyles}>Work at {item?.company}</Text>
                    <Text style={styles.txtStyles}>{item?.from}{" to "} {item?.to}</Text>
                  </View>
                  <TouchableOpacity>
                    <Image style={styles.iconStyle} resizeMode={'contain'} source={IMAGES.EDITBIO} />
                  </TouchableOpacity>
                </View>
              )
            })
          }
          <Line />
          <Text style={styles.eduTxt}>Places lived</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate(ADDCITY)} style={styles.btnContiner} >
            <Image tintColor={COLORS.PRIMARY} style={styles.imgstyle} resizeMode={'contain'} source={IMAGES.ADDBIO} />
            <Text style={styles.txtStyle}>Add city</Text>
          </TouchableOpacity>
          {
            aboutData?.placesLived?.map((item) => {
              return (
                <View style={styles.educationContiner}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image tintColor={COLORS.PRIMARY} style={[styles.iconStyle, { marginTop: H(1.5) }]} resizeMode={'contain'} source={IMAGES.LOCATIONPIN} />
                    <Text style={styles.txtStyles}>Lives in {item?.city}</Text>
                  </View>
                  <TouchableOpacity>
                    <Image style={styles.iconStyle} resizeMode={'contain'} source={IMAGES.EDITBIO} />
                  </TouchableOpacity>
                </View>
              )
            })
          }
          <Line />
          <Text style={styles.eduTxt}>Contact info</Text>

          {
            aboutData?.BasicInfo1?.map((item) => {
              return (
                <>
                  {item?.primary_email && (
                    <View style={styles.educationContiner}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image tintColor={COLORS.PRIMARY} style={[styles.iconStyle, { marginTop: H(1.5) }]} resizeMode={'contain'} source={IMAGES.PHONECALLICON} />
                        <Text style={styles.txtStyles}>Mobile {item?.contact_number}</Text>
                      </View>
                    </View>
                  )}
                  {item?.primary_email && (
                    <View style={styles.educationContiner}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image tintColor={COLORS.PRIMARY} style={[styles.iconStyle, { marginTop: H(1.5) }]} resizeMode={'contain'} source={IMAGES.EMAILICON} />
                        <Text style={styles.txtStyles}>primary_email {item?.primary_email}</Text>
                      </View>
                    </View>
                  )}
                  {item?.primary_email && (
                    <View style={styles.educationContiner}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image tintColor={COLORS.PRIMARY} style={[styles.iconStyle, { marginTop: H(1.5) }]} resizeMode={'contain'} source={IMAGES.EMAILICON} />
                        <Text style={styles.txtStyles}>secondary_email {item?.primary_email}</Text>
                      </View>
                    </View>
                  )}

                </>
              )
            })
          }
          <Line />
          <Text style={styles.eduTxt}>Family and Realationship</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate(ADDRELATIONSHIP)} style={styles.btnContiner} >
            <Image tintColor={COLORS.PRIMARY} style={styles.imgstyle} resizeMode={'contain'} source={IMAGES.ADDBIO} />
            <Text style={styles.txtStyle}>Add Family Member</Text>
          </TouchableOpacity>
          {
            aboutData?.RelationShip?.map((item) => {
              return (
                <>
                  <View style={styles.educationContiner}>
                    <View style={styles.educationContiner}>
                      <Image style={[styles.iconStyle, { marginTop: H(1.5) }]} resizeMode={'contain'} source={IMAGES.RELATIONSHIP} />
                      <Text style={[styles.txtStyles, { color: COLORS.LIGHTBLACK }]}>{item?.full_name}</Text>
                      <Text style={[styles.txtStyles]}>{item?.relationship}</Text>
                    </View>
                    <TouchableOpacity>
                      <Image style={styles.iconStyle} resizeMode={'contain'} source={IMAGES.EDITBIO} />
                    </TouchableOpacity>
                  </View>
                </>
              )
            })
          }
          <Line />
          <Text style={styles.eduTxt}>Life Events</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate(ADDEVENTS)} style={styles.btnContiner} >
            <Image tintColor={COLORS.PRIMARY} style={styles.imgstyle} resizeMode={'contain'} source={IMAGES.ADDBIO} />
            <Text style={styles.txtStyle}>Add Life Events</Text>
          </TouchableOpacity>
          {
            aboutData?.EventService?.map((item) => {
              return (
                <>
                  <Text style={styles.txtStyles}>{item?.event_name}</Text>
                  <Text style={[styles.txtStyles, { color: COLORS.LIGHTBLACK }]}>{item?.content}</Text>
                </>
              )
            })
          }
          <Line />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EditAbout;