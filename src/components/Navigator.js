import HomeScreen from '../screens/HomeScreen';
import Categories from '../screens/Categories';
import Settings from '../screens/Setting';
import BookMarks from '../screens/BookMarks';

import React, { PureComponent } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PostDetail from './PostDetails';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';

//StackNavigator
const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Post: PostDetail
});

const CategoryStack = createStackNavigator({
    Category: Categories
});

const BookMarksStack = createStackNavigator({
    BookMark: BookMarks
});

const SettingStack = createStackNavigator({
    Setting: Settings
});

const TabNavigator = createBottomTabNavigator({
    HomeScrn: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarOptions: {
                activeTintColor: Colors.secondary,
                inactiveTintColor: Colors.primaryDark,
            },
            tabBarIcon: () => (
                <MaterialIcons name='home' size={22} color={Colors.primary} />
            )
        },
    },
    CategoryScrn: {
        screen: CategoryStack,
        navigationOptions: {
            tabBarLabel: 'Category',
            tabBarOptions: {
                activeTintColor: Colors.secondary,
                inactiveTintColor: Colors.primaryDark,
            },
            tabBarIcon: () => (
                <MaterialIcons name='category' size={22} color={Colors.primary} />
            ),
        }
    },
    BookMrk: {
        screen: BookMarksStack,
        navigationOptions: {
            tabBarLabel: 'Bookmarks',
            tabBarOptions: {
                activeTintColor: Colors.secondary,
                inactiveTintColor: Colors.primaryDark,
            },
            tabBarIcon: () => (
                <MaterialIcons name='bookmarks' size={22} color={Colors.primary} />
            )
        }
    },
    SettingSrcn: {
        screen: SettingStack,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarOptions: {
                activeTintColor: Colors.secondary,
                inactiveTintColor: Colors.primaryDark,
            },
            tabBarIcon: () => (
                <MaterialIcons name='settings' size={22} color={Colors.primary} />
            )
        }
    }

});

export default createAppContainer(TabNavigator);