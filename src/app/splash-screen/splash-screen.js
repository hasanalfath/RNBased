import React from 'react';
import SplashScreenLayout from '../../modules/splash-screen/component/splash-screen-layout';

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('LoginScreen');
    }, 3000);
  }
  render() {
    return <SplashScreenLayout />;
  }
}
export default SplashScreen;
