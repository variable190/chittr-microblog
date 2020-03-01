import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/home'
import ProfileScreen from '../screens/profile'
import PostScreen from '../screens/post'
import SearchScreen from '../screens/search'

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Post: PostScreen,
    Profile: ProfileScreen
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
  }
)

export default createAppContainer(AppNavigator)
