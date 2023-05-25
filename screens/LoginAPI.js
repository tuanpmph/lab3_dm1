import { View, Text, Button,  ImageBackground } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButum";

const StackMain = createNativeStackNavigator();

const LoginAPI = (propas) =>{
    const [username, setusername] = useState("");
    const [passwd,setpasswd] = useState("");

    const doLogin =() =>{
    // Kiểm tra Api dữ liệu

    if(username.length == 0){
        alert("Chưa nhập Username"); return;
    }
    if(passwd.length == 0){
        alert("Chưa nhập Passwd"); return;  // lẹnh return để thoát khỏi hàm login
    }

    /// thực hiện fectch để lấy dữ liệu về
    let url_check_login = "http://localhost:3000/users";
    fetch (url_check_login)
    .then ((res) => {return res.json (); })
    .then (async(res_login) => {
        if(res_login.length != 1){
            alert("Sai tên đăng nhập");
            return;

        }else{
            //số lượng lấy được 1 bản ghi ==> kiểm tra password
            let obju = res_login[0];
            if(obju.passwd != passwd){
                alert("Sai mật khẩu"); return;
            }else{
                try{

                    await AsyncStorage.setItem('loginInfo', JSON.stringify(obju));
                    // Chuyển màn
                    propas.navigation.navigate('ListProduct');
                } catch(e){
                    console.log(e);
                }
              
            }
        }
    })

}



    return(
        <View>
              <ImageBackground 
              style = {{height: '100%',width: '100%',justifyContent:'center',alignItems:'center'}} source={require('../Image/nennnn.jpg')}>
              <Text>Màn hình đăng nhập</Text>
              <CustomInput style={{height:'5%', width:'70%', borderBottomColor:'white', borderWidth: 1}} placeholder="Username" setValue={setusername} secureTextEntry={false} />
              <CustomInput style={{height:'5%', width:'70%', borderBottomColor:'white', borderWidth: 1}} placeholder="Passwd" textContentType="password" secureTextEntry={true} setValue={setpasswd}/>
              <CustomButton title="Login" onPress={doLogin}/>

              </ImageBackground>
              



        </View>
    );
}

export default LoginAPI;