import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Button,
// } from 'react-native';
import RecipesView from '../screens/RecipesView';
import RecipesDetailView from '../screens/RecipesDetailView';
import NavigationService from './NavigationService';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: RecipesView,
//       headerMode: 'none',
//     },
//     DetailRecipes: {
//       screen: RecipesDetailView,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

const RootStack = createStackNavigator(
  {
    Home: RecipesView,
    DetailRecipes: RecipesDetailView,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;

// export default class App extends Component {
//   render() {
//     return (
//       <AppContainer
//         ref={navigatorRef => {
//           NavigationService.setTopLevelNavigatorForRecipesView(navigatorRef);
//         }}
//       />
//     );
//   }
// }
