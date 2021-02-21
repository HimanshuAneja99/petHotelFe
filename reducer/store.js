import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk';

import uiReducer from './reducers/uiReducer'
import userReducer from './reducers/userReducer'

const initialState = {}
const middleware = [thunk];

const reducers = combineReducers({
    UI : uiReducer,
    user : userReducer
})

const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  
  export default store;
