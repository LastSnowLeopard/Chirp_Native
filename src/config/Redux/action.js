import {
  doHttpAuth,
  doHttpDelete,
  doHttpGet,
  doHttpMultipart,
  doHttpPost,
  doHttpWithPost,
} from '../api/HttpUtils';
import {INVITESENT, TAB} from '../../constants/Navigation';
import Alert from '../../components/Alert/Alert';
import APIENDPOINTS from '../api/ApiEndpoints';

export const LOADING = 'LOADING';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const USERDATA = 'USERDATA';
export const ISLOGEDIN = 'ISLOGEDIN';
export const PROFILEDATA = 'PROFILEDATA';
export const USERPOST = 'USERPOST';
export const TAGFRIENDSLIST = 'TAGFRIENDSLIST';
export const GETHOBBYLIST = 'GETHOBBYLIST';
export const GETFEELINGLIST = 'GETFEELINGLIST';
export const USERADDEDHOBBY = 'USERADDEDHOBBY';
export const GETUSERPHOTO = 'GETUSERPHOTO';
export const GETUSERVIDEO = 'GETUSERVIDEO';
export const ABOUTDATA = 'ABOUTDATA';
export const BACKGROUNDIMAGES = 'BACKGROUNDIMAGES';
export const NEWSFEED = 'NEWSFEED';
export const FRIENDSREQUEST = 'FRIENDSREQUEST';
export const NOTIFCATIONLISTING = 'NOTIFCATIONLISTING';
export const STORIESLIST = 'STORIESLIST';

export const login = (data, props, CommonActions) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpAuth(data, APIENDPOINTS.LOGIN);
  dispatch(stopLoading());
  if (res.status === 1) {
    dispatch({type: USERDATA, payload: res?.data});
    dispatch(isLogin(true));
    dispatch(stopLoading());
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: TAB}],
      }),
    );
  } else {
    dispatch(stopLoading());
    Alert(res?.message);
  }
};

export const signup = (data, props, CommonActions) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpAuth(data, APIENDPOINTS.SIGNUP);
  dispatch(stopLoading());
  if (res.respond.status === 1) {
    Alert('Account created successfully now kindly login!');
    props.navigation.goBack();
  } else {
    dispatch(stopLoading());
    Alert(res?.respond?.message);
    return;
  }
};

export const forgotPassword = (data, props) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpAuth(data, APIENDPOINTS.FORGOTPASSWORD);
  dispatch(stopLoading());
  if (res.status === 1) {
    props.navigation.navigate(INVITESENT);
  } else {
    Alert(res?.message);
  }
};

export const getProfileData = (data, props) => async dispatch => {
  const res = await doHttpPost(data, APIENDPOINTS.READPROFILEDATA);
  if (res?.status === 1) {
    dispatch({type: PROFILEDATA, payload: res?.data});
  }
};

export const updateCoverImage = (data, userData) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpMultipart(data, APIENDPOINTS.UPDATECOVERIMAGE);
  dispatch(stopLoading());
  if (res?.respond?.status === 1) {
    dispatch(getProfileData(userData));
  }
};

export const updateProfileImage = (data, userId) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpMultipart(data, APIENDPOINTS.UPDATEPROFILEIMAGE);
  dispatch(stopLoading());
  if (res?.respond?.status === 1) {
    dispatch(getProfileData(userId));
  }
};

export const deleteCoverImage = (data, userId) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpDelete(data, APIENDPOINTS.DELETECOVERIMAGE);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch(getProfileData(userId));
  }
};

export const deleteProfileImage = (data, userId) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpDelete(data, APIENDPOINTS.DELETEPROFILEIMAGE);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch(getProfileData(userId));
  }
};

export const getFriendsList = data => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.GETFREINDSLIST);
  dispatch(stopLoading());
  if (res?.length > 0) {
    const mapedData = res.map(item => {
      const data = {
        ...item,
        checked: false,
      };
      return data;
    });
    dispatch({type: TAGFRIENDSLIST, payload: mapedData});
  }
};

export const getHobby = () => async dispatch => {
  dispatch(startloading());
  const res = await doHttpGet(APIENDPOINTS.GETHOBBYLIST);
  if (res.status === 1) {
    const mapedData = res?.data.map(item => {
      const data = {
        ...item,
        selected: false,
      };
      return data;
    });
    dispatch({type: GETHOBBYLIST, payload: mapedData});
  }
};

export const getUserPost = data => async dispatch => {
  const res = await doHttpPost(data, APIENDPOINTS.GETUSERPOST);
  if (res?.status === 1) {
    dispatch({type: USERPOST, payload: res?.posts});
  }
};

export const getFeelingList = data => async dispatch => {
  dispatch(startloading());
  const res = await doHttpGet(APIENDPOINTS.GETFEELINGLIST);
  dispatch(stopLoading());
  if (res.status === 1) {
    dispatch({type: GETFEELINGLIST, payload: res?.data});
  }
};

export const likePost = (data, postData, newsFeedData) => async dispatch => {
  const res = await doHttpPost(data, APIENDPOINTS.LIKEPOST);
  if (res.status === 1) {
    dispatch(getUserPost(postData));
    dispatch(getNewsFeed(newsFeedData));
  }
};

export const createPost =
  (data, props, userData, newsData) => async dispatch => {
    dispatch(startloading());
    const res = await doHttpMultipart(data, APIENDPOINTS.CREATEPOST);
    dispatch(stopLoading());
    console.log(res);
    if (res?.status === 1) {
      props.navigation.goBack();
      dispatch(getUserPost(userData));
      dispatch(getNewsFeed(newsData));
    } else {
      // Alert(res?.message)
    }
  };

export const addBio = (data, props, userId) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.ADDBIO);
  dispatch(stopLoading());
  if (res?.status === 1) {
    props.navigation.goBack();
    dispatch(getProfileData(userId));
  }
};

export const addUserHobby = (data, props, userId) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.ADDUSERHOBBY);
  dispatch(stopLoading());
  console.log(res);
  if (res?.status === 1) {
    props.navigation.goBack();
    dispatch(getUseraddedHobby(userId));
  }
};

export const getUseraddedHobby = data => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.GETUSERADDEDHOBBY);
  dispatch(stopLoading());
  if (res.status === 1) {
    dispatch({type: USERADDEDHOBBY, payload: res?.data?.hobbies});
  }
};

export const getPhotos = data => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.GETUSERPHOTO);
  dispatch(stopLoading());
  if (res.status === 1) {
    dispatch({type: GETUSERPHOTO, payload: res?.data});
  }
};

export const getVideos = data => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.GETVIDEOS);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch({type: GETUSERVIDEO, payload: res?.data?.response});
  }
};

export const addRelation = (data, props, userID) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.ADDRELATION);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch(getAboutData(userID));
    setTimeout(() => {
      props.navigation.goBack();
    }, 700);
  }
};

export const addCity = (data, props, userID) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.ADDPLACED);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch(getAboutData(userID));
    setTimeout(() => {
      props.navigation.goBack();
    }, 700);
  }
};

export const addWork = (data, props, userID) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.ADDWORK);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch(getAboutData(userID));
    setTimeout(() => {
      props.navigation.goBack();
    }, 700);
  }
};

export const AddEducations = (data, props, userID) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.ADDEDUCATION);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch(getAboutData(userID));
    setTimeout(() => {
      props.navigation.goBack();
    }, 700);
  }
};

export const addEvent = (data, props, userID) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpPost(data, APIENDPOINTS.ADDEVENT);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch(getAboutData(userID));
    setTimeout(() => {
      props.navigation.goBack();
    }, 700);
  }
};

export const deletePost = (data, postData) => async dispatch => {
  const res = await doHttpPost(data, APIENDPOINTS.DELETEPOST);
  if (res?.status === 1) {
    dispatch(getUserPost(postData));
  }
};

export const getAboutData = data => async dispatch => {
  dispatch(startloading);
  const res = await doHttpPost(data, APIENDPOINTS.GETABOUTUS);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch({type: ABOUTDATA, payload: res?.data});
  }
};

export const addComment = (data, postData) => async dispatch => {
  const res = await doHttpPost(data, APIENDPOINTS.ADDCOMMENT);
  console.log(res);
  if (res?.status === 1) {
    dispatch(getUserPost(postData));
  }
};

export const getBackGroundImage = () => async dispatch => {
  const res = await doHttpGet(APIENDPOINTS.BACKGROUNDIMAGES);
  if (res?.status === 1) {
    dispatch({type: BACKGROUNDIMAGES, payload: res?.data});
  }
};

export const getNewsFeed = data => async dispatch => {
  const res = await doHttpWithPost(data, APIENDPOINTS.GET_NEWS_FEED);
  if (res?.status === 1) {
    dispatch({type: NEWSFEED, payload: res?.posts});
  }
};

export const getRequestList = data => async dispatch => {
  const res = await doHttpWithPost(data, APIENDPOINTS.GET_FREINDS_REQUEST);
  dispatch({type: FRIENDSREQUEST, payload: res});
};

export const acceptRequest = (data, userData) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpWithPost(data, APIENDPOINTS.ACCEPT_REQUEST);
  dispatch(stopLoading());
  if (res?.status === 1) {
    dispatch(getRequestList(userData));
  }
};

export const notifcationList = data => async dispatch => {
  dispatch(startloading());
  const res = await doHttpWithPost(data, APIENDPOINTS.NOTIFCATION_LISTING);
  dispatch(stopLoading());
  dispatch({type: NOTIFCATIONLISTING, payload: res});
};

export const storiesList = data => async dispatch => {
  dispatch(stopLoading());
  const res = await doHttpWithPost(data, APIENDPOINTS.GETSTORIESLIST);
  if (res?.status === 1) {
    dispatch({type: STORIESLIST, payload: res?.data});
  }
};

export const uploadStorytoDB = (data, props, storiesData) => async dispatch => {
  dispatch(startloading());
  const res = await doHttpMultipart(data, APIENDPOINTS.UPLOAD_STORY);
  dispatch(stopLoading());
  if (res.status === 1) {
    dispatch(storiesList(storiesData));
    props.navigation.goBack();
  }
};

export const startloading = () => dispatch => {
  dispatch({type: LOADING, payload: true});
};

export const stopLoading = () => dispatch => {
  dispatch({type: LOADING, payload: false});
};

export const isLogin = data => dispatch => {
  dispatch({type: ISLOGEDIN, payload: data});
};
