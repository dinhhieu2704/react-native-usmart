import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./types"
import Home from "../screens/Home"
import Welcome from "../screens/Welcome"
import Notifications from "../screens/Notifications"
import Settings from "../screens/Settings"
import MyTab from "../components/tab/tab"
import DashboardCommon from "../screens/DashboardCommon"

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="MyTab" component={MyTab} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="DashboardCommon" component={DashboardCommon} />
        </Stack.Navigator>
    )
}

export default Navigation