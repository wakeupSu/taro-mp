import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import {Switch } from "react-native";

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Switch />
      </View>
    )
  }
}
