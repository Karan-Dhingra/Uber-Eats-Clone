import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home'
import RestaurantDetail from './screens/ResturantDetail'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/store'
import OrderCompleted from './screens/orderCompleted';

const store = configureStore();

export default function RootNavigation() {
    const Stack = createNativeStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    );
}