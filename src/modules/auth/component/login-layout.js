import React from 'react';
import { Container, Input, Item, Form, Icon, Button, Text } from 'native-base';
import { View, Image } from 'react-native';
import PasswordTextBox from '../../../common/utils/passwordTextBox';
import styles from './login-layout-style';
import mainStyles from '../../../../assets/styles/main';
import logo from '../../../../assets/image/bee.png';
import Colors from '../../../../assets/styles/colors';

class SplashScreenLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  updateState(password) {
    this.setState({ password });
  }

  render() {
    return (
      <Container style={Colors.SUN_FLOWER}>
        <View style={styles.viewLogo}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={mainStyles.shadow}>
          <Form style={styles.viewLogin}>
            <Item style={{
              borderColor: 'transparent',
              paddingHorizontal: 10
            }}
            >
              <Icon type="FontAwesome" name='user' />
              <Input
                placeholder="Username"
                onChangeText={username => {
                  this.setState({ username });
                  console.log('Username', this.state.username);
                }}
                value={this.state.username}
              />
            </Item>
            <View style={styles.separator}
            />
            <Item style={{
              borderColor: 'transparent',
              paddingHorizontal: 10
            }}
            >
              <PasswordTextBox type='FontAwesome' icon='lock' placeholder='Password' onChange={(v) => this.updateState('password', v)} />
            </Item>
          </Form>
        </View>
      </Container>
    );
  }
}
export default SplashScreenLayout;
