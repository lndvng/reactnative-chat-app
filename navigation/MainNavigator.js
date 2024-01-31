import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';

import ChatListScreen from '../screens/ChatListScreen';
import ChatSettingScreen from '../screens/ChatSettingsScreen';
import SettingScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ 
            headerTitle: "",
            headerShadowVisible: false
            }}>
            <Tab.Screen
                name='ChatList'
                component={ChatListScreen}
                options={{
                    tabBarLabel: 'Chats',
                    tabBarIcon: ({ color, size }) => <SimpleLineIcons name='bubbles' size={size} color={color} />
                }} />
            <Tab.Screen
                name='Settings'
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => <SimpleLineIcons name='settings' size={size} color={color} />
                }} />
        </Tab.Navigator>
    );
};

const MainNavigator = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={TabNavigator}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='ChatScreen'
                component={ChatScreen}
                options={{
                    headerTitle: 'Chat Screen'
                }} />
            <Stack.Screen
                name='ChatSettings'
                component={ChatSettingScreen}
                options={{
                    headerTitle: 'Settings'
                }} />
        </Stack.Navigator>
    );
};

export default MainNavigator;