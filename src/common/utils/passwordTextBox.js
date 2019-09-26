import React from 'react';
import { Item, Input, Icon, Label } from 'native-base';

class PasswordTextBox extends React.Component {
    state = {
        icon: "eye-off",
        password: true
    };

    changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            password: !prevState.password
        }));
    }

    render() {
        const { type, icon, onChange, placeholder } = this.props;
        return (
            <Item style={{
                borderColor: 'transparent',
            }}
            >
                <Icon active type={type} name={icon} />
                <Input secureTextEntry={this.state.password} placeholder={placeholder} onChangeText={(e) => onChange(e)} />
                <Icon name={this.state.icon} onPress={() => this.changeIcon()} />
            </Item>
        );
    }
}

export default PasswordTextBox;