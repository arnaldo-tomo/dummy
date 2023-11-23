import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Services {
    static async AuthUser({ email, password, navigation }) {

        try {
            const auth = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: 'kminchelle',
                    password: '0lelplR',
                })
            })
                .then(res => res.json())
                .then((p) => {
                    if (p.token) {
                        console.log(p)
                        this.storeData(p)
                        this.GoHome({ navigation })
                    }
                    if (p.message) {
                        Alert.alert(p.message)
                    }
                })
                .catch((error) => console.log('catch no login', error))
        } catch (error) {
            console.log('Catch', error)
        }
    }

    static storeData = async (p) => {
        try {
            const jsonValue = JSON.stringify(p);
            await AsyncStorage.setItem('UserToken', jsonValue);

        } catch (e) {
            console.log(e)
        }
    };

    static getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('UserToken');
            if (jsonValue) {
                console.log('getData', jsonValue)
                return true;
            } else {
                console.log('getData', jsonValue)
                return false;

            }
        } catch (e) {
            console.log('catch', e)
        }
    };

    static removeValue = async () => {
        try {
            await AsyncStorage.removeItem('UserToken');
            console.log('removeValue.');
        } catch (e) {
            console.log('catch', e);
        }
    }


    static GoHome({ navigation }) {
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    }
    static GoOut({ navigation }) {
        this.removeValue();
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }


}


