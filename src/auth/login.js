import { Ionicons } from "@expo/vector-icons";
import { StatusBar, SafeAreaView, Dimensions, Text, TextInput, CheckBox, TouchableOpacity, View } from "react-native"
import { useState } from "react"
import { Services } from "../../services"

const { width } = Dimensions.get('screen')
export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView >
                <StatusBar barStyle={'light'} />

                <View style={{ backgroundColor: 'black', width: width, height: 250, paddingTop: 50, padding: 20 }} >
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row' }}>
                        <Ionicons name="chevron-back" color={'white'} size={20} />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>BACK</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', paddingLeft: 30, paddingTop: 50, width: 280 }}>Log into Your account</Text>
                </View>

                <View style={{ padding: 50 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>E-mail</Text>
                        <TextInput placeholder="Hello@Dummy.com" style={{ marginTop: 10 }} value={email} onChangeText={(email) => setEmail(email)} />
                        <View style={{ borderColor: 'black', borderWidth: 1, marginTop: 5 }}></View>
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <Text style={{ fontWeight: 'bold' }}>Password</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <TextInput placeholder="Password" passwordRules={'string'} style={{ marginTop: 10, }} keyboardType='visible-password' value={password} onChangeText={(password) => setPassword(password)} />
                            <Text style={{ color: 'gray' }}>Forget?</Text>
                        </View>
                        <View style={{ borderColor: 'black', borderWidth: 1, marginTop: 5 }}></View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>

                        <TouchableOpacity onPress={() => Services.AuthUser({ email, password, navigation })} style={{
                            backgroundColor: 'black', padding: 15, borderRadius: 30, marginBottom: 20, width: width - 60, height: 60, alignItems: 'center'
                        }} >
                            < Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>SIGN </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: '#1877F2', padding: 15, borderRadius: 30,
                            width: width - 60, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                        }} >
                            <Ionicons name="logo-facebook" color={'white'} size={22} style={{ marginRight: 20 }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>SIGN UP WITH FACEBOOK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView >
        </View >
    )
}