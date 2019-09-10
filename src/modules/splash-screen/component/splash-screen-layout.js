import React from 'react';
import {Container} from 'native-base';
import {Image, StatusBar} from 'react-native';
import styles from './splash-screen-style';
import logo from '../../../../assets/image/bee.png';
import Colors from '../../../../assets/styles/colors';

class SplashScreenLayout extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar
          backgroundColor={Colors.BACKGROUND}
          barStyle="dark-content"
        />
        <Image source={logo} style={styles.image} />
      </Container>
    );
  }
}
export default SplashScreenLayout;
