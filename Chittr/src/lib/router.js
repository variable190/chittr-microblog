import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import React from 'react'
import HomeScreen from '../screens/home'
import PostScreen from '../screens/post'
import SearchScreen from '../screens/search'
import ProfileScreen from '../screens/profile'
import FollowersScreen from '../screens/followers'
import Icon from 'react-native-vector-icons/Ionicons'


const ProfileStack = createStackNavigator({
  ProfileScreen,
  FollowersScreen
})

ProfileStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='md-person'
      color={tintColor}
      size={25}
    />
  )
}

const TabBar = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Post: PostScreen,
  Profile: ProfileStack
},
{
  tabBarOptions: {
    activeTintColor: 'white',
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: 'red',
      borderWidth: 1,
      borderColor: 'black'
    }
  }
})

HomeScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='md-home'
      color={tintColor}
      size={25}
    />
  )
}

SearchScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='md-search'
      color={tintColor}
      size={25}
    />
  )
}

PostScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='md-chatbubbles'
      color={tintColor}
      size={25}
    />
  )
}

export default createAppContainer(TabBar)
