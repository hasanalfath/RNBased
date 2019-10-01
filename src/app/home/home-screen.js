import React from 'react';
import { connect } from 'react-redux';
import HomeLayout from '../../modules/home/component/home-layout';
import * as homeAction from '../../modules/home/store/home-action';

class HomeScreen extends React.Component {
  render() {
    return (
      <HomeLayout />
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapActionToProps = () => ({
  ...homeAction,
});

export default connect(mapStateToProps, mapActionToProps)(HomeScreen);
