export const AuthLogin = ({ email, password, navigation }) => {
    try {
        const auth = fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
            })
        })
            .then(res => res.json())
            .then((p) => {
                NavigateToHome({ navigation })
            })
            .catch((error) => console.log('catch no login', error))
    } catch (error) {
        console.log('Catch', error)
    }
}

// Função para navegar até a tela Home
const NavigateToHome = ({ navigation }) => {
    console.log('Do NAda')
    navigation.navigate('Home');
};