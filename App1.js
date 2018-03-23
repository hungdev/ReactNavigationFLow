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
const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed 2'
    }
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
    })
  }
})

const TabHome = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name='list' size={35} color={tintColor} />
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={35} color={tintColor} />
    }
  }
}, {
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
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
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
//   Details: {
//     screen: UserDetail,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
//     })
//   }
// })

const DrawerStack = DrawerNavigator({
  home: { screen: TabHome },
  screen2: { screen: FeedStack },
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
