let initialState = {
  login: null,
  userView: 'register-page', //register, login, main, search
  searchString: null,
  tweet: []
}

//action constants
const REGISTER_USER = 'REGISTER_USER', //i global scope, behöver exporteras
      LOGIN = 'LOGIN',
      LOGOUT = 'LOGOUT',
      TWEET = 'TWEET',
      SEARCH = 'SEARCH',
      FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      FAVORITE = 'FAVORITE',
      REFRESH = 'REFRESH',
      DATABASE_TWEETS_INCOMMING = 'DATABASE_TWEETS_INCOMMING';

//create actions using functions
function actionRegisterUser(login, password, email) {
  return {
    type: REGISTER_USER,
    login,  //= login: login
    password,
    email
  }
}

function actionLogin(login, password) {
  return {
    type: LOGIN,
    login,
    password
  }
}

function actionLogout() {
  return {
    type: LOGOUT
  }
}

function actionTweet(text) {
  return {
    type: TWEET,
    text
  }
}

function actionSearch(searchString) {
  return {
    type: SEARCH,
    searchString
  }
}

function actionFollow(recipientLogin) {
  return {
    type: FOLLOW,
    recipientLogin
  }
}

function actionFollow(recipientLogin) {
  return {
    type: UNFOLLOW,
    recipientLogin
  }
}

function actionFavorite(tweetId) {
  return {
    type: FAVORITE,
    tweetId
  }
}

function actionRefresh() {
  return {
    type: REFRESH
  }
}