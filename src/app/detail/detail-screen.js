import React from 'react';
import DetailLayout from '../../modules/detail/component/detail-layout';

class DetailScreen extends React.Component {
  render() {
    const itemId = this.props.navigation.getParam('itemId');
    const city = this.props.navigation.getParam('city');
    const geo = this.props.navigation.getParam('geo');

    return (
      <DetailLayout 
        itemId={itemId}
        city={city}
        geo={geo}
      />
    );
  }
}

export default DetailScreen
