import React from 'react';
import { connect } from 'react-redux';
import TransactionsLayout from '../../modules/transactions/component/transactions-layout';

class TransactionsScreen extends React.Component {
  render() {
    return (
      <TransactionsLayout />
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});


export default connect(mapStateToProps)(TransactionsScreen);