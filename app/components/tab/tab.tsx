import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import { StyleSheet } from 'react-native';
import Notifications from '../../screens/Notifications';
import Settings from '../../screens/Settings';
import Ionicons from '@expo/vector-icons/Ionicons';
import DashboardCommon from '../../screens/DashboardCommon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'white',
        color: '#2f70aceb',
    },
    iconFocused: {
        backgroundColor: '#2f70aceb',
        color: 'white',
        borderRadius: 30,
        padding: 10
    },
});

export default function MyTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    // let iconName = '';

                    if (route.name === 'HomeScreen') {
                        // iconName = focused ? 'home' : 'home-outline';
                        return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} style={focused ? styles.iconFocused : styles.icon} />;
                    } else if (route.name === 'Settings') {
                        // iconName = focused ? 'settings' : 'settings-outline';
                        return <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} style={focused ? styles.iconFocused : styles.icon} />;
                    } else if (route.name === 'Notifications') {
                        // iconName = focused ? 'notifications' : 'notifications-outline';
                        return <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={size} color={color} style={focused ? styles.iconFocused : styles.icon} />;
                    }
                },
            })}
            initialRouteName='Home'
        >
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="HomeScreen">
                {() => (
                    <SettingsStack.Navigator screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarShowLabel: false
                    })}>
                        <SettingsStack.Screen
                            name="Home"
                            component={Home}
                        />
                        <SettingsStack.Screen name="DashboardCommon" component={DashboardCommon} />
                    </SettingsStack.Navigator>
                )}
            </Tab.Screen>
            {/* <Tab.Screen name="Home" component={Home} /> */}
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}
