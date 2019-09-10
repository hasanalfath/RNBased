import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import rootNavigationConfig from './root-navigation-stack-config';
import {INITIAL_ROUTE} from '../init-options-properties';

const AppNavigator = createStackNavigator(rootNavigationConfig, {
  initialRouteName: INITIAL_ROUTE,
});

export default createAppContainer(AppNavigator);
