import {combineReducers} from 'redux';
import {
  ABOUTDATA,
  BACKGROUNDIMAGES,
  CURRENTLOCATION,
  GETFEELINGLIST,
  GETHOBBYLIST,
  GETUSERPHOTO,
  GETUSERVIDEO,
  ISLOGEDIN,
  LOADING,
  NEWSFEED,
  PROFILEDATA,
  TAGFRIENDSLIST,
  USERADDEDHOBBY,
  USERDATA,
  USERPOST,
  FRIENDSREQUEST,
  NOTIFCATIONLISTING,
  STORIESLIST,
} from './action';

const initialUserState = {
  loading: false,
  userData: '',
  isLogin: false,
  profileData: '',
  userPost: [],
  userTagFriends: [],
  hobbyList: [],
  feelingList: [],
  userAddedHobby: [],
  userPhoto: [],
  userVideo: [],
  aboutData: '',
  backgroundImages: [],
  newsFeed: [],
  friendRequestList: [],
  notifcationListing: [],
  storiesList: [],
};

const userReducer = (state = initialUserState, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload,
      };

    case USERDATA:
      return {
        ...state,
        userData: payload,
      };

    case ISLOGEDIN:
      return {
        ...state,
        isLogin: payload,
      };
    case PROFILEDATA:
      return {
        ...state,
        profileData: payload,
      };
    case USERPOST:
      return {
        ...state,
        userPost: payload,
      };

    case TAGFRIENDSLIST:
      return {
        ...state,
        userTagFriends: payload,
      };

    case GETHOBBYLIST:
      return {
        ...state,
        hobbyList: payload,
      };
    case GETFEELINGLIST:
      return {
        ...state,
        feelingList: payload,
      };

    case USERADDEDHOBBY:
      return {
        ...state,
        userAddedHobby: payload,
      };

    case GETUSERPHOTO:
      return {
        ...state,
        userPhoto: payload,
      };
    case GETUSERVIDEO:
      return {
        ...state,
        userVideo: payload,
      };
    case ABOUTDATA:
      return {
        ...state,
        aboutData: payload,
      };
    case BACKGROUNDIMAGES:
      return {
        ...state,
        backgroundImages: payload,
      };
    case NEWSFEED:
      return {
        ...state,
        newsFeed: payload,
      };
    case FRIENDSREQUEST:
      return {
        ...state,
        friendRequestList: payload,
      };
    case NOTIFCATIONLISTING:
      return {
        ...state,
        notifcationListing: payload,
      };
    case STORIESLIST:
      return {
        ...state,
        storiesList: payload,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  user: userReducer,
});
export default reducer;
