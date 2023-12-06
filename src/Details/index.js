import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
const { width, height } = Dimensions.get('screen');
import { Ionicons } from "@expo/vector-icons";
export const Details = ({ route, navigation }) => {
    const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = route.params
    return (
        <SafeAreaView>
            <ScrollView>

                <View>
                    <ScrollView horizontal>

                        <ImageBackground source={{ uri: thumbnail }} style={{ width: width, height: 400 }} resizeMode='contain'>
                            <View style={{ bottom: 0, position: 'absolute', justifyContent: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                            </View>
                        </ImageBackground>

                    </ScrollView>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding: 20,
                        elevation: 1, position: 'absolute', zIndex: 1, width: width
                    }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <Ionicons name="chevron-back-circle" size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={40} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: width, height: height, backgroundColor: 'white', borderRadius: 30, elevation: 1, padding: 20 }}>
                        <View style={{ backgroundColor: 'gray', height: 4, width: 50, borderRadius: 26, alignContent: 'center', alignSelf: 'center' }}></View>

                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>{title}</Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>MZN{price}</Text>
                        <Text style={{ fontWeight: '500', color: 'gray', marginTop: 10 }}>{description}</Text>

                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Other products</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            {images.map((item) =>
                                <View style={{ marginRight: 15, marginTop: 10, borderRadius: 16, elevation: 1, width: 110, height: 110, backgroundColor: 'white', alignContent: 'center', alignItems: 'center' }}>
                                    <Image source={{ uri: item }} width={100} height={100} style={{ borderRadius: 16, padding: 5, marginTop: 5 }} />
                                </View>
                            )}
                        </ScrollView>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}