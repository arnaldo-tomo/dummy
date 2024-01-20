import { Ionicons } from "@expo/vector-icons";
import { StatusBar, ScrollView, SafeAreaView, Dimensions, Text, TextInput, CheckBox, TouchableOpacity, View, ActivityIndicator } from "react-native"
import { useEffect, useState } from "react"
import { Services, processing } from "../../services"

const { width } = Dimensions.get('screen')
export const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView >
            <StatusBar barStyle={'light'} />
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: 'black', width: width, height: 250, paddingTop: 50, padding: 20 }} >
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row' }}>
                            <Ionicons name="chevron-back" color={'white'} size={20} />
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>BACK</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', paddingLeft: 30, paddingTop: 50, width: 280 }}>Log into Your account</Text>
                    </View>

                    <View style={{ padding: 50 }}>
                        {email.length == 0 && <>

                            {erro && <>

                                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignContent: 'center', alignSelf: 'center', marginBottom: 4 }}>
                                    <Ionicons name="warning" color={'red'} size={25} style={{ justifyContent: 'center', alignItems: 'center' }} />
                                    <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 15, }}>Credenciais inválidas</Text>
                                </View>
                                <View style={{ borderColor: 'red', borderWidth: 1, marginBottom: 20 }}></View>
                            </>
                            }
                        </>
                        }
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>Username</Text>
                            <TextInput placeholder="Jonh Doe" style={{ height: 50, width: width }} value={email} onChangeText={(email) => setEmail(email)} />
                            <View style={{ borderColor: 'black', borderWidth: 1, }}></View>
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontWeight: 'bold' }}>Password</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <TextInput placeholder="Password" passwordRules={'string'} style={{ height: 50, width: width }} keyboardType='visible-password' value={password} onChangeText={(password) => setPassword(password)} />
                                <Text style={{ color: 'gray', position: 'absolute', right: 0 }}>Forget?</Text>
                            </View>
                            <View style={{ borderColor: 'black', borderWidth: 1, }}></View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>

                            <TouchableOpacity onPress={() => {
                                setLoading(false);
                                Services.AuthUser({ email, password, navigation })
                                    .then((e) => {
                                        if (e == null) {
                                            setLoading(true);
                                            setErro(true)
                                            setEmail('')
                                            setPassword('')
                                        }
                                    })
                            }} style={{
                                backgroundColor: 'black', padding: 15, borderRadius: 30, marginBottom: 20, width: width - 60,
                                height: 60, alignItems: 'center', justifyContent: 'center',
                            }} >
                                < Text style={[loading ? { fontWeight: 'bold', fontSize: 15, color: 'white' } : { fontWeight: 'bold', fontSize: 15, color: 'white' }]}>{loading ? <>SIGN</> : <> <ActivityIndicator color={'white'} /> Autenticando...</>} </Text>
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
                </View >
            </ScrollView>
        </SafeAreaView >
    )
}