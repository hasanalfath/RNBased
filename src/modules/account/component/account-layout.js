import React, { Component } from 'react';
import { Container, Badge, Icon, Button, StyleProvider, Content, Footer } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../../assets/styles/colors';
import getTheme from '../../../theme/components';
import platform from '../../../theme/variables/platform';

class AccountLayout extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={Colors.SUN_FLOWER}>
            <Content>
                <Text>Account</Text>
            </Content>
        </Container>
      </StyleProvider>
    );
  }
}
export default AccountLayout
