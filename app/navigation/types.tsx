import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
  Home: undefined,
  Welcome: undefined,
  Notifications: undefined,
  Settings: undefined,
  MyTab: undefined,
  DashboardCommon: {
    name: string,
    icon: string
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}