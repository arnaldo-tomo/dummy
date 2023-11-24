import { StatusBar } from 'expo-status-bar';
import StackNavgation from './routers';
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, Dimensions, Text, TextInput, CheckBox, TouchableOpacity, View, ActivityIndicator } from "react-native"
import { Services, processing } from "./services"

const { width } = Dimensions.get('screen')
export default function App() {
  return (
    <StackNavgation />
  );
}

