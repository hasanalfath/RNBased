import React, { Component } from 'react';
import { Container, Badge, Icon, Button, StyleProvider, Content, Footer, Card, CardItem } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../../assets/styles/colors';
import getTheme from '../../../theme/components';
import platform from '../../../theme/variables/platform';
import { withNavigation } from 'react-navigation';

class DiscoverLayout extends Component {
  render() {
    const {
      persons,
    } = this.props;

    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={Colors.SUN_FLOWER}>
          <Content>
            {
              persons.map(item => (
                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('DetailScreen', {
                      itemId: item.id,
                      city: item.address.city,
                      geo: item.address.geo,
                    });
                  }}>
                    <Card>
                      <CardItem header>
                        <View style={{ flexDirection: 'column' }}>
                          <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                              {item.name}
                            </Text>
                          </View>
                          <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={{ fontSize: 12 }}>
                              {item.phone}
                            </Text>
                          </View>
                          <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={{ fontSize: 12 }}>
                              {item.website}
                            </Text>
                          </View>
                        </View>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </View>
              ))
            }
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
export default withNavigation(DiscoverLayout);