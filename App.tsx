import { NavigationContainer } from "@react-navigation/native"
import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Welcome from "./app/screens/Welcome"
import Navigation from "./app/navigation"
import MyTab from "./app/components/tab/tab"

export default function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <SafeAreaProvider>
        <NavigationContainer>
          {/* <Navigation /> */}
          <MyTab></MyTab>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}