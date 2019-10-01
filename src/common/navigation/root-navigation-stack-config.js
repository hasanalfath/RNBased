import SplashScreen from '../../app/splash-screen/splash-screen';
import LoginScreen from '../../app/auth/login-screen';
import HomeScreen from '../../app/home/home-screen';
import DetailScreen from '../../app/detail/detail-screen';
import Colors from '../../../assets/styles/colors';

const rootNavigationConfig = {
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: Colors.PRIMARY
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Detail',
      headerStyle: {
        backgroundColor: Colors.PRIMARY
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
};
export default rootNavigationConfig;
