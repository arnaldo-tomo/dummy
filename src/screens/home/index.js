import { Dimensions, FlatList, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity } from "react-native"
import { View } from "react-native";
import { Services } from "../../../services";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { oneBoardImg } from "../../../config";
import { useEffect, useState } from "react"
const { width } = Dimensions.get('screen')

export const Home = ({ navigation }) => {
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
        <SafeAreaView>
            <StatusBar style="dark" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, width: width - 40, left: 20 }}>
                <TouchableOpacity >
                    <Ionicons name="menu" size={35} />
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
            <View style={{ width: width - 40, left: 20, marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Product</Text>
            </View>
            <View style={{
                marginLeft: 20, width: width - 40, borderColor: 'black',
                borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 40, marginTop: 20
            }}>
                <Ionicons name="search" style={{ position: 'relative', left: 0 }} size={20} />
                <TextInput placeholder="Seach Kits" style={{ position: 'relative', width: width - 120 }} />
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
            <View>
                {products ? <>
                    {products.map((e) =>

                        <ScrollView horizontal n>

                            <TouchableOpacity key={e.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, width: width - 40, }}>

                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={{ uri: e.thumbnail }} style={{ width: 100, height: 100 }} />
                                    <Text>{e.id}</Text>
                                </View>



                            </TouchableOpacity>
                        </ScrollView>

                    )}

                </>
                    :
                    <>
                        <Text style={{ marginLeft: 20, fontWeight: 'bold' }}>Carregando//</Text>

                    </>
                }






            </View>
        </SafeAreaView>
    )
}