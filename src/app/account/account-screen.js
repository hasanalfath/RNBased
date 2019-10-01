import React from 'react';
import { connect } from 'react-redux';
import AccountLayout from '../../modules/account/component/account-layout';

class AccountScreen extends React.Component {
  render() {
    return (
      <AccountLayout />
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});


export default connect(mapStateToProps)(AccountScreen);