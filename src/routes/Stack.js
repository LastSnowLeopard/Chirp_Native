import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/Signup/Signup';
import {
  ADDCITY,
  ADDEDUCATION,
  ADDEVENTS,
  ADDRELATIONSHIP,
  ADDWORK,
  COMMENT,
  CREATEPOST,
  EDITABOUT,
  EDITBIO,
  EDITHOBBY,
  EDITPROFILE,
  FEELINGACTIVITY,
  FORGOTPASSWORD,
  GIF,
  HOME,
  INVITESENT,
  PHOTOVIDEO,
  PRIVACY,
  SCAN,
  SEARCHLOCATION,
  SEEALLPHOTOS,
  SIGNIN,
  SIGNUP,
  SPLASHACREEN,
  TAB,
  TAGFRIENDS,
  TAGGEDUSER,
  CREATESTORY,
  ALLSTORIES,
  CREATESTORYPREVIEW,
  MUSIC,
  STORYVIEW,
} from '../constants/Navigation';
import Signin from '../screens/Signin/Signin';
import Home from '../screens/Home/Home';
import SplashScreen from '../screens/SplashScreen/Splash';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import InviteSent from '../screens/InviteSent/InviteSent';
import Tabs from './TopTab';
import CreatePost from '../screens/PostCreation/CreatePost/CreatePost';
import SearchLocation from '../screens/PostCreation/SearchLocation/SearchLocation';
import TagPeople from '../screens/PostCreation/TagPeople/TagPeople';
import EditProfile from '../screens/ProfileEdit/EditProfile/EditProfile';
import EditBio from '../screens/ProfileEdit/EditBio/EditBio';
import EditHobby from '../screens/ProfileEdit/EditHobby/EditHobby';
import EditAbout from '../screens/ProfileEdit/EditAbout/EditAbout';
import TaggedUser from '../screens/TaggeduserList/Taggeduser';
import FeelingActivity from '../screens/PostCreation/FeelingActivity/FeelingActivity';
import Privacy from '../screens/PostCreation/Privacy/Privacy';
import PhotoVideo from '../screens/PostCreation/PhotoVideo/PhotoVideo';
import AddRelationShip from '../screens/ProfileEdit/AddRelationShipStatus/AddRelationShip';
import AddCity from '../screens/ProfileEdit/AddCity/Addcity';
import AddWork from '../screens/ProfileEdit/AddWork/AddWork';
import AddEducation from '../screens/ProfileEdit/AddEducation/AddEducation';
import AddEvents from '../screens/ProfileEdit/AddEvents/AddEvents';
import SeeAllPhotos from '../screens/SeeAllPhotos/SeeAllPhotos';
import Gif from '../screens/PostCreation/Gif/Gif';
import Comments from '../screens/Comments/Comments';
import Scan from '../screens/Scan/Scan';
import CreateStory from '../screens/CreateStory/CreateStory';
import AllStories from '../screens/AllStories/AllStories';
import CreateStoryPreview from '../screens/CreateStoryPreview/CreateStoryPreview';
import Music from '../screens/MusicScreen/Music';
import StoryView from '../components/StoryView/StoryView';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SPLASHACREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SPLASHACREEN} component={SplashScreen} />
        <Stack.Screen name={SIGNUP} component={Signup} />
        <Stack.Screen name={SIGNIN} component={Signin} />
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={FORGOTPASSWORD} component={ForgotPassword} />
        <Stack.Screen name={INVITESENT} component={InviteSent} />
        <Stack.Screen name={TAB} component={Tabs} />
        <Stack.Screen name={CREATEPOST} component={CreatePost} />
        <Stack.Screen name={SEARCHLOCATION} component={SearchLocation} />
        <Stack.Screen name={TAGFRIENDS} component={TagPeople} />
        <Stack.Screen name={EDITPROFILE} component={EditProfile} />
        <Stack.Screen name={EDITBIO} component={EditBio} />
        <Stack.Screen name={EDITHOBBY} component={EditHobby} />
        <Stack.Screen name={EDITABOUT} component={EditAbout} />
        <Stack.Screen name={TAGGEDUSER} component={TaggedUser} />
        <Stack.Screen name={FEELINGACTIVITY} component={FeelingActivity} />
        <Stack.Screen name={PRIVACY} component={Privacy} />
        <Stack.Screen name={PHOTOVIDEO} component={PhotoVideo} />
        <Stack.Screen name={ADDRELATIONSHIP} component={AddRelationShip} />
        <Stack.Screen name={ADDCITY} component={AddCity} />
        <Stack.Screen name={ADDWORK} component={AddWork} />
        <Stack.Screen name={ADDEDUCATION} component={AddEducation} />
        <Stack.Screen name={ADDEVENTS} component={AddEvents} />
        <Stack.Screen name={SEEALLPHOTOS} component={SeeAllPhotos} />
        <Stack.Screen name={GIF} component={Gif} />
        <Stack.Screen name={COMMENT} component={Comments} />
        <Stack.Screen name={SCAN} component={Scan} />
        <Stack.Screen name={CREATESTORY} component={CreateStory} />
        <Stack.Screen name={ALLSTORIES} component={AllStories} />
        <Stack.Screen name={MUSIC} component={Music} />
        <Stack.Screen name={STORYVIEW} component={StoryView} />
        <Stack.Screen
          name={CREATESTORYPREVIEW}
          component={CreateStoryPreview}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
