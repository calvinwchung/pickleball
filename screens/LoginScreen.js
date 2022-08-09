import { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import Logo from '../assets/images/doublesPaddle.png';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    placeholderTextColor='#003f5c'
                    onChangeText={(email) =>setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    placeholderTextColor='#003f5c'
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => 
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'tab'}]
                    })
                }
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('register')}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        height: 200,
        width: 200,
        marginBottom: 30
    },
    inputView: {
        backgroundColor: '#d0f4de',
        borderRadius: 30,
        width: '70%',
        height: 40,
        marginBottom: 20,
        alignItems: 'center'
    },
    input: {
        flex: 1
    },
    forgotPass: {
        height: 30,
        marginBottom: 30
    },
    loginBtn: {
        width: '60%',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#fcf6bd'
    },
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    signUp: {
        fontWeight: 'bold',
        color: '#219ebc'
    }
});

export default LoginScreen;