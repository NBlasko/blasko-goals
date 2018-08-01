import { createStore,/* applyMiddleware,*/ compose } from 'redux';
//import thunk from 'redux-thunk';  no need for thunk, firebase has it's own async way of doing things
import reducer from './reducers';



const store = createStore(reducer, {},  compose(
  /*  applyMiddleware(thunk),*/
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));



export default store;