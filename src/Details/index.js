import { Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native"
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
                        {images.map((item) =>
                            <ImageBackground key={item} source={{ uri: item }} style={{ width: width, height: 210 }} resizeMode='contain'>
                                <View style={{ bottom: 0, position: 'absolute', justifyContent: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}> Deslize</Text>
                                    <Ionicons name="chevron-forward" size={20} color={'white'} />
                                </View>
                            </ImageBackground>
                        )}
                    </ScrollView>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding: 20,
                        elevation: 1, position: 'absolute', zIndex: 1, width: width
                    }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <Ionicons name="chevron-back-circle" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: width, height: height, backgroundColor: 'white', borderRadius: 16, elevation: 1, padding: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{price}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{description}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{discountPercentage}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{rating}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{stock}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{brand}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{category}</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}