import React, { Component } from 'react';
import { Container, Input, Item, Form, Icon, Button, Text, StyleProvider } from 'native-base';
import { View, Image, TouchableOpacity } from 'react-native';
import PasswordTextBox from '../../../common/utils/passwordTextBox';
import styles from './login-layout-style';
import mainStyles from '../../../../assets/styles/main';
import logo from '../../../../assets/image/bee.png';
import Colors from '../../../../assets/styles/colors';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../../../common/utils/validation';
import getTheme from '../../../theme/components';
import platform from '../../../theme/variables/platform';

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({ input, placeholder, secureTextEntry, label, type, meta: { touched, error, warning }}) {
    var hasError = false;

    if (error !== undefined) {
      hasError = true;
    }
    return (
      <View>
        <Item rounded error={touched && hasError}>
          <Input
            type={type}
            {...input}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={mainStyles.pl20}
          />
        </Item>
        {touched && hasError ? <Text style={styles.errorMessage}>{error}</Text> : <Text />}
      </View>
    )
  }

  render() {
    const {
      handleSubmit,
      reset,
      submitting,
    } = this.props;

    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={Colors.SUN_FLOWER}>
          <View style={styles.viewLogo}>
            <Image source={logo} style={styles.image} />
          </View>
          <View>
            <Form onSubmit={handleSubmit} style={mainStyles.m20}>
              <Field
                type='text'
                placeholder='Username'
                name='username'
                component={this.renderInput}
              />
              <Field
                type='text'
                secureTextEntry={true}
                placeholder='Password'
                name='password'
                component={this.renderInput}
              />
            </Form>

            <View style={mainStyles.m20}>
              <Button
                rounded
                primary
                block
                onPress={reset}
                type="submit"
                disabled={submitting}
              >
                <Text>Login</Text>
              </Button>
            </View>
            <View style={styles.signUpContainer}>
              <TouchableOpacity>
                <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}
export default reduxForm({
  form: 'test',
  validate
})(LoginLayout)
