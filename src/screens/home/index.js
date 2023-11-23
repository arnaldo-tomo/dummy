import { Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { Services } from "../../../services"

export const OutSide = ({ navigation }) => {
    Services.removeValue();
    navigation.navigate('OneBoard');
}
export const Home = () => {
    return (
        <View>
            <Text>HOME</Text>

            <TouchableOpacity onPress={() => OutSide()}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}