import React from 'react';
// import { View } from 'react-native';
import { connect } from 'react-redux';
// import { Input, Item, Text } from 'native-base';
// import styles from '../../../src/modules/auth/component/login-layout-style';
// import mainStyles from '../../../assets/styles/main';
import LoginLayout from '../../modules/auth/component/login-layout';

class LoginScreen extends React.Component {
  render() {
    return (
      <LoginLayout />
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});


export default connect(mapStateToProps)(LoginScreen);