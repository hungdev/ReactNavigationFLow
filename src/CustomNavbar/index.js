import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionio from 'react-native-vector-icons/MaterialCommunityIcons'
// import {Images, Colors} from '../../themes'

export default class CustomNavbar extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  renderLeft () {
    return (
      <TouchableOpacity style={{flex: 1, marginLeft: 10}} onPress={() => this.props.onPressLeft()} >
        <Ionicons name='ios-menu' size={30} color='grey' />
      </TouchableOpacity>
    )
  }

  renderRight () {
    return (
      <TouchableOpacity style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10}}>
        {/* <MCIcons name='bell-ring-outline' size={30} color={Colors.white} /> */}
        <Ionicons name='ios-notifications-outline' size={30} color='grey' />
        <Ionicons name='ios-people-outline' size={30} color='grey' style={{marginLeft: 10}} />
      </TouchableOpacity>
    )
  }

  renderMid () {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Ionicons name='ios-people-outline' size={30} color='grey' style={{marginLeft: 10}} />
        {/* <Image source={Images.personUnknownMale} style={{width: 45, height: 45, borderRadius: 23}} /> */}
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderLeft()}
        {this.renderMid()}
        {this.renderRight()}
        {/* <Ionicons name='md-menu' size={30} color={Colors.black} />
        <Image source={Images.personUnknownMale} style={styles.avatarNav} /> */}
      </View>
    )
  }
}
