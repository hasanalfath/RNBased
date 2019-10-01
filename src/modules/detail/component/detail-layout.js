import React, { Component } from 'react';
import { Container, Badge, Icon, Button, StyleProvider, Content, Footer, Card, CardItem } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../../assets/styles/colors';
import getTheme from '../../../theme/components';
import platform from '../../../theme/variables/platform';

class DetailLayout extends Component {
    render() {
        const {
            itemId,
            city,
            geo
        } = this.props;

        return (
            <StyleProvider style={getTheme(platform)}>
                <Container style={Colors.SUN_FLOWER}>
                    <Content>
                        <View style={{ marginHorizontal: 10 }}>
                            <Card>
                                <CardItem>
                                    <Text>{itemId}</Text>
                                    <Text>{city}</Text>
                                    <Text>{geo.lat} {geo.lng}</Text>
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}
export default DetailLayout
