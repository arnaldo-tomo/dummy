import { Text, TouchableOpacity } from "react-native"
import { View } from "react-native";
import { Services } from "../../../services";

export const Home = ({ navigation }) => {
    return (
        <View>
            <Text>HOME</Text>

            <TouchableOpacity onPress={() => Services.GoOut({ navigation })}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}