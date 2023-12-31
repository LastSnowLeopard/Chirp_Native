const APIENDPOINTS = {
  LOGIN: 'auth/login',
  SIGNUP: 'auth/user-registration',
  FORGOTPASSWORD: 'auth/forget-password',
  READPROFILEDATA: 'profile/read-profile-data-by-id',
  UPDATECOVERIMAGE: 'profile/insert-update-cover-image',
  UPDATEPROFILEIMAGE: 'profile/insert-update-profile-image',
  DELETEPROFILEIMAGE: 'profile/delete-profile-image',
  DELETECOVERIMAGE: 'profile/delete-cover-image',
  GETFREINDSLIST: 'post/get-friends-by-userid',
  GETUSERPOST: 'post/get-post-by-id',
  CREATEPOST: 'post/create-post',
  LIKEPOST: 'post/like-post',
  GETFEELINGLIST: 'get-data/get-feelings-list',
  GETEVENTLIST: 'get-data/get-events-list',
  GETHOBBYLIST: 'get-data/get-hobby-list',
  ADDBIO: 'profile/add-bio-in-profile',
  ADDUSERHOBBY: 'profile/add-user-hobbies',
  GETUSERADDEDHOBBY: 'profile/get-user-hobbies',
  GETUSERPHOTO: 'profile/get-photos',
  GETVIDEOS: 'profile/get-videos',
  ADDRELATION: 'profile/add-relation',
  GETABOUTUS: 'profile/get-about-section',
  ADDPLACED: 'profile/place-lived',
  ADDWORK: 'profile/add-work',
  ADDEDUCATION: 'profile/add-education',
  ADDEVENT: 'profile/add-event',
  DELETEPOST: 'post/delete-post',
  DELETEPOST: 'post/delete-post',
  ADDCOMMENT: 'post/create-comments',
  BACKGROUNDIMAGES: 'get-data/get-post-background-list',
  GET_NEWS_FEED: 'post/get-newsfeeds',
  GET_FREINDS_REQUEST: 'post/get-friend-requests-list',
  ACCEPT_REQUEST: 'post/accept-friend-request',
  NOTIFCATION_LISTING: 'post/read-notification',
  GETSTORIESLIST: 'post/read-stories',
  UPLOAD_STORY: 'post/upload-story',
};

export default APIENDPOINTS;
