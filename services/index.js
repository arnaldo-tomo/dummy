import { Alert } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
export class Services {
    static async AuthUser(email, password) {

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
                        this.storeData(p)
                        console.log('UserToken', p)
                    }
                    if (p.message) {
                        Alert.alert(p.message)
                    }
                })
                .catch((error) => console.log('ola', error))



        } catch (error) {
            console.log('CAtch', error)
        }


    }
    static storeData = async (p) => {
        try {

            const jsonValue = JSON.stringify(p);
            await AsyncStorage.setItem('UserToken', jsonValue);

        } catch (e) {
            // saving error
            console.log(e)
        }
    };

    static getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('UserToken');
            // return jsonValue != null ? JSON.parse(jsonValue) : null;
            if (jsonValue) {
                console.log('true', jsonValue)
                return true;
            } else {
                console.log('false', jsonValue)
                return false;

            }
        } catch (e) {
            // error reading value
        }
    };



    static removeValue = async () => {
        try {
            await AsyncStorage.removeItem('UserToken')
        } catch (e) {
            // remove error
        }

        console.log('Done.')
    }


    static checked() {
        try {
            this.getData().then((e) => e)
            return e;
        } catch (e) {

        }
    }
}



