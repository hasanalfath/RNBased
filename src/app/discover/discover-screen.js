import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DiscoverLayout from '../../modules/discover/component/discover-layout';
import * as discoverAction from '../../modules/discover/store/discover-action';

class DiscoverScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons: persons });
        console.log(persons);
      })
  }

  render() {
    return (
      <DiscoverLayout
        persons={this.state.persons}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapActionToProps = () => ({
  ...discoverAction,
});

export default connect(mapStateToProps, mapActionToProps)(DiscoverScreen);
