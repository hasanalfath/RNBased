import React, { Component } from 'react';
import { Container, Badge, FooterTab, Icon, Button, StyleProvider, Content, Footer, Card, CardItem, Body } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../../../assets/styles/main';
import Colors from '../../../../assets/styles/colors';
import getTheme from '../../../theme/components';
import platform from '../../../theme/variables/platform';
import Home from '../../../app/home/home-screen';
import Discover from '../../../app/discover/discover-screen';
import Transactions from '../../../app/transactions/transactions-screen';
import Account from '../../../app/account/account-screen';

class HomeLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: ''
    };
  }

  componentDidMount() {
    this.setState({ selectedTab: 'discover' });
  }

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      // case 'home':
      //   return (<Home />);
      //   break;
      case 'discover':
        return (<Discover />);
        break;
      case 'transactions':
        return (<Transactions />);
        break;
      case 'account':
        return (<Account />);
        break;
      default:
    }
  }

  render() {
    const {
      getList,
      persons,
    } = this.props;

    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={Colors.SUN_FLOWER}>
          <Content>
            {this.renderSelectedTab()}
          </Content>
          <Footer>
            <FooterTab>
              {/* <Button vertical
                active={this.state.selectedTab === 'home'}
                onPress={() => this.setState({ selectedTab: 'home' })}
              >
                <Icon active name="home" />
                <Text style={mainStyles.footerTabText}>Home</Text>
              </Button> */}
              <Button active vertical
                active={this.state.selectedTab === 'discover'}
                onPress={() => this.setState({ selectedTab: 'discover' })}
              >
                <Icon name="md-planet" />
                <Text style={mainStyles.footerTabText}>Discover</Text>
              </Button>
              <Button badge vertical
                active={this.state.selectedTab === 'transactions'}
                onPress={() => this.setState({ selectedTab: 'transactions' })}
              >
                <Badge ><Text style={{ color: Colors.WHITE }}>51</Text></Badge>
                <Icon name="md-list-box" />
                <Text style={mainStyles.footerTabText}>Transactions</Text>
              </Button>
              <Button vertical
                active={this.state.selectedTab === 'account'}
                onPress={() => this.setState({ selectedTab: 'account' })}
              >
                <Icon name="person" />
                <Text style={mainStyles.footerTabText}>Account</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}
export default HomeLayout
