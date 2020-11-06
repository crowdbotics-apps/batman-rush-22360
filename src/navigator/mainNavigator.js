import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn44168584Navigator from '../features/SignIn44168584/navigator';
import Tutorial4168583Navigator from '../features/Tutorial4168583/navigator';
import Settings5168582Navigator from '../features/Settings5168582/navigator';
import BlankScreen0168580Navigator from '../features/BlankScreen0168580/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn44168584: { screen: SignIn44168584Navigator },
Tutorial4168583: { screen: Tutorial4168583Navigator },
Settings5168582: { screen: Settings5168582Navigator },
BlankScreen0168580: { screen: BlankScreen0168580Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
