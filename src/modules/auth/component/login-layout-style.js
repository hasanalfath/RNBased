import {PercentageSize} from '../../../../assets/js/index';
import Colors from '../../../../assets/styles/colors';

export default {
  image: {
    width: PercentageSize.widthPercentageToDP('40%'),
    maxWidth: 200,
    resizeMode: 'contain',
  },
  viewLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: PercentageSize.heightPercentageToDP('40%'),
  },
  separator: {
    borderWidth: 1,
    borderColor: Colors.CLOUDS,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  errorMessage: {
    color: Colors.RED,
    fontSize: 12,
    paddingLeft: 10,
    marginVertical: 10
  },
  signUpContainer: {
    margin: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14
  }
};
