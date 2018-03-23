import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { StackNavigator, DrawerNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import LoginScreen from './src/Containers/LoginScreen'
import SignupScreen from './src/Containers/SignupScreen'
import ForgottenPasswordScreen from './src/Containers/ForgottenPasswordScreen'
import Screen1 from './src/Containers/Screen1'
import Screen2 from './src/Containers/Screen2'
import Screen3 from './src/Containers/Screen3'
import DrawerContainer from './src/Containers/DrawerContainer'
import Feed from './src/screen/Feed'
import FeedTwo from './src/screen/FeedTwo'
import UserDetail from './src/screen/UserDetail'
import Me from './src/screen/Me'
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

// drawer stack
// const DrawerStack = DrawerNavigator({
//   screen1: { screen: Screen1 },
//   screen2: { screen: Screen2 },
//   screen3: { screen: Screen3 }
// }, {
//   gesturesEnabled: false,
//   contentComponent: (props) => <DrawerContainer {...props} />
// })

// const DrawerNavigation = StackNavigator({
//   DrawerStack: { screen: DrawerStack }
// }, {
//   headerMode: 'float',
//   navigationOptions: ({navigation}) => ({
//     headerStyle: {backgroundColor: 'green'},
//     title: 'Logged In to your app!',
//     gesturesEnabled: false,
//     headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
//   })
// })
const HomeStack = StackNavigator({
  Home: {
    screen: Feed,
    navigationOptions: {
      title: 'HomeScreen'
    }
  },
  Details: { screen: UserDetail, navigationOptions: {tabBarVisible: false} }
})

const SettingsStack = StackNavigator({
  Settings: { screen: FeedTwo },
  Details: { screen: Screen1 }
})

const TabHome = TabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false
  }
)

// const RootStack = StackNavigator({
//   TabHome: {
//     screen: TabHome,
//     navigationOptions: {
//       title: 'Feed'
//     }
//   },
//   : {
//     screen: UserDetail,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
//     })
//   }
// })

const DrawerStack = DrawerNavigator({
  home: { screen: TabHome },
  // screen2: { screen: FeedStack },
  screen3: { screen: Screen3 }
}, {
  gesturesEnabled: false,
  contentComponent: (props) => <DrawerContainer {...props} />
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: { backgroundColor: 'red' },
    title: 'You are not logged in'
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerStack }
}, {
    // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'drawerStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
