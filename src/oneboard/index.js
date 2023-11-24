import { ImageBackground } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native"
import { oneBoardImg } from "../../config"
import { Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";
import { Services } from "../../services";
import { OutSide } from "../screens/home";
const { width, height } = Dimensions.get('screen');
export const Onboard = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <StatusBar style="light" />
            <ImageBackground source={oneBoardImg} style={{ width: width, height: height }} resizeMode='cover'>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>

                    <View style={{
                        justifyContent: 'flex-end', alignContent: 'flex-end',
                        flexDirection: 'row', alignItems: 'center', marginTop: 40, padding: 10
                    }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>SIGN IN</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color={'white'} />
                    </View>
                </TouchableOpacity>
                <View style={{ position: 'absolute', zIndex: 1, bottom: 50, width: width }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 40, width: 300, marginLeft: 30, paddingBottom: 20 }}>
                        Ideal store for your Shopping
                    </Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity onPress={() => Services.getData()} style={{
                            backgroundColor: 'white', padding: 15, borderRadius: 30, marginBottom: 20, width: width - 60, height: 60, alignItems: 'center'
                        }} >
                            < Text style={{ fontWeight: 'bold', fontSize: 15, }}>SIGN UP WITH EMAIL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderColor: 'white', borderWidth: 1, padding: 15, borderRadius: 30,
                            width: width - 60, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                        }} >
                            <Ionicons name="logo-facebook" color={'white'} size={22} style={{ marginRight: 20 }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>CONTINUE WITH FACEBOOK</Text>
                        </TouchableOpacity>
                    </View>

                </View >
                <LinearGradient style={{ width: width, height: height }}
                    colors={['#000000', 'transparent']}
                    start={{ y: 0.8, x: 0.1 }}
                    end={{ y: 0.4, x: 0.2 }}
                >
                </LinearGradient>
            </ImageBackground >
        </View >
    )
}