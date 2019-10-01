import React , { Component } from 'react';
import allReducers from '../../modules/auth/store/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SimpleForm from '../../modules/auth/component/simple-form.js';
import LoginLayout from '../../modules/auth/component/login-layout.js';

const store = createStore(allReducers);
 export default class Application extends Component{
  render(){
    return(
      <Provider store= {store}>
        {/* <SimpleForm /> */}
        <LoginLayout />
      </Provider>
    )
  }
}