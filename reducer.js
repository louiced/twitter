let initialState = {
  login: null,
  userView: 'register-page', //register, login, main, search
  searchString: null,
  tweet: []
}
const store = createStore(rootReducer);
/*store.dispatch( actionRegisterUser(1, 2, 3) );*/

function rootReducer(state = initialState, action) {
  
  switch( action.type ) {
    case REGISTER_USER:
      //kopiera och gör ett nytt state med Object.assign():
      let newstate = Object.assign({}, state); //ej let newState = state
      //gör dessa förändringar:
      newstate.login = action.login;
      //returnera det nya statet:
      return newstate;
    case LOGIN:
      //TODO
  }
}
