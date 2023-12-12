import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity } from "react-native"
import { View } from "react-native";
import { Services } from "../../../services";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { oneBoardImg } from "../../../config";
import { useEffect, useState } from "react"
const { width } = Dimensions.get('screen')
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

export const Home = ({ navigation }) => {
    // nsbgfbj
    const [products, setProducts] = useState('');

    useEffect(() => {
        const fetchData = () => {
            try {
                fetch('https://dummyjson.com/products')
                    .then(res => res.json())
                    .then((e) => {
                        setProducts(e.products)
                    })

            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [])
    return (
        <MenuProvider >
            <View style={{ backgroundColor: 'white', flex: 1 }}>

                <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
                    <StatusBar style="dark" />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, width: "90%", left: 20, }}>
                        <TouchableOpacity >
                            <Menu>
                                <MenuTrigger  >
                                    <Ionicons name="menu" size={35} />
                                </MenuTrigger>

                                <MenuOptions >
                                    <MenuOption onSelect={() => alert(`Delete`)} >
                                        <Text onPress={() => { Services.GoOut({ navigation }) }} style={{ color: 'red' }}>Terminar Sessao</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dummy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
                            <Ionicons name="cart" size={35} />
                            <Text style={{
                                position: 'absolute', right: 0, top: 0, backgroundColor: 'red',
                                borderRadius: 40, color: 'white', paddingRight: 4, paddingLeft: 4

                            }}>0</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginLeft: 15, width: "90%", borderColor: 'black',
                        borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 40, marginTop: 15, borderRadius: 16
                    }}>
                        <Ionicons name="search" style={{ position: 'relative', left: 0 }} size={20} />
                        <TextInput placeholder="Seach Kits" style={{ position: 'relative', width: "80%", }} />
                        <Ionicons name="filter" style={{ position: 'relative', right: 0 }} size={20} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, width: width - 40, marginTop: 20 }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="list" size={20} />
                            <Ionicons name="grid" size={15} style={{ marginLeft: 20 }} />
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold' }}>Filter</Text>
                        </View>
                    </View>

                    <View style={{ width: "90%", left: 20, marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Product</Text>
                    </View>

                    {/* <ScrollView > */}
                    {products ?

                        <>

                            <FlatList data={products} numColumns={2} keyExtractor={products.id} renderItem={({ item }) =>

                                <TouchableOpacity onPress={() => navigation.navigate('Details', item)} style={{
                                    flexDirection: 'row', justifyContent: 'space-between', elevation: 1,
                                    width: "45%", height: 220, elevation: 10, backgroundColor: 'white', padding: 5, marginTop: 20, marginLeft: 15, borderRadius: 20

                                }}>
                                    <View>
                                        <Image source={{ uri: item.thumbnail }} style={{ width: 170, height: 100, borderRadius: 16, justifyContent: 'center' }} />
                                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.title}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginRight: 10 }}>
                                            <Text style={{ fontWeight: 'bold' }}>stock</Text>
                                            <Text style={{ fontWeight: 'bold' }}>{item.stock}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginRight: 10 }}>
                                            <Text style={{ fontWeight: 'bold' }}>${item.price}.00</Text>
                                            <Ionicons name="add" size={20} color={'white'} style={{ backgroundColor: 'black', borderRadius: 16 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            }
                            />

                        </>
                        :
                        <>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', elevation: 1, justifyContent: 'center',
                                    width: "45%", height: 220, elevation: 10, backgroundColor: 'white', padding: 5, marginTop: 20, marginLeft: 15, borderRadius: 20

                                }}>

                                    <ActivityIndicator shouldRasterizeIOS={true} size={'large'} collapsable={true} color={'black'} />
                                </View>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', elevation: 1, justifyContent: 'center',
                                    width: "45%", height: 220, elevation: 10, backgroundColor: 'white', padding: 5, marginTop: 20, marginLeft: 15, borderRadius: 20

                                }}>

                                    <ActivityIndicator shouldRasterizeIOS={true} size={'large'} collapsable={true} color={'black'} />
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', elevation: 1, justifyContent: 'center',
                                    width: "45%", height: 220, elevation: 10, backgroundColor: 'white', padding: 5, marginTop: 20, marginLeft: 15, borderRadius: 20

                                }}>

                                    <ActivityIndicator shouldRasterizeIOS={true} size={'large'} collapsable={true} color={'black'} />
                                </View>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', elevation: 1, justifyContent: 'center',
                                    width: "45%", height: 220, elevation: 10, backgroundColor: 'white', padding: 5, marginTop: 20, marginLeft: 15, borderRadius: 20

                                }}>

                                    <ActivityIndicator shouldRasterizeIOS={true} size={'large'} collapsable={true} color={'black'} />
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', elevation: 1, justifyContent: 'center',
                                    width: "45%", height: 220, elevation: 10, backgroundColor: 'white', padding: 5, marginTop: 20, marginLeft: 15, borderRadius: 20

                                }}>

                                    <ActivityIndicator shouldRasterizeIOS={true} size={'large'} collapsable={true} color={'black'} />
                                </View>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', elevation: 1, justifyContent: 'center',
                                    width: "45%", height: 220, elevation: 10, backgroundColor: 'white', padding: 5, marginTop: 20, marginLeft: 15, borderRadius: 20

                                }}>

                                    <ActivityIndicator shouldRasterizeIOS={true} size={'large'} collapsable={true} color={'black'} />
                                </View>

                            </View>

                        </>
                    }
                    {/* </ScrollView> */}


                </SafeAreaView >
            </View>
        </MenuProvider>

    )
}