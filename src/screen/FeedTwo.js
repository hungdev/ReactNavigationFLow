import React, { Component } from 'react'
import { ScrollView, Button } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import CustomNavbar from '../CustomNavbar'
class Settings extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      headerTitle: <CustomNavbar onPressLeft={()=> navigation.navigate('DrawerOpen')}/>
    }
  }

  render () {
    return (
      <ScrollView>

        <List>
          <ListItem
            title='Notifications'
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <ListItem
            title='Profile'
          />
          <ListItem
            title='Password'
          />
        </List>
        <List>
          <ListItem
            title='Sign Out'
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>

    )
  }
}

export default Settings
