import React from 'react'
import { Button, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation' // Version can be specified in package.json

class HomeScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title='Go to Details'
          onPress={() => this.props.navigation.navigate('HelloKey')}
        />
      </View>
    )
  }
}
class HelloOne extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HelloOne Screen</Text>
        <Button
          title='Go to Details'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}
class HelloTwo extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HelloTwo Screen</Text>
        <Button
          title='Go to Details'
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title='Go to Details... again'
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title='Go back'
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}
const Hello = StackNavigator(
  {
    HelloOne: {
      screen: HelloOne
    },
    HelloTwo: {
      screen: HelloTwo
    }
  },
  {
    initialRouteName: 'HelloOne'
  }
)

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    HelloKey: {
      screen: Hello
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default class App extends React.Component {
  render () {
    return <RootStack />
  }
}
