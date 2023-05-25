import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet , Image} from "react-native";

const ListProduct = ({navigation}) => {
    constclickLogin = () => {
        navigation.navigate('Login');
    };



    
    return(
        <View style= {styles.container}>
            <Image source={require('../Image/th.png')}/> 

           <Button title="Sing ing" onPress={constclickLogin}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    
    }
})
export default ListProduct;