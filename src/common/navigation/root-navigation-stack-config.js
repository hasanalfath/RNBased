import SplashScreen from '../../app/splash-screen/splash-screen';
import LoginScreen from '../../app/auth/login-screen';
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
};
export default rootNavigationConfig;
