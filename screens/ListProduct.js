import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet ,SafeAreaView, Image, ScrollView} from "react-native";
import React , { useEffect, useState } from "react";

const ListProduct = ({navigation}) => {
    const [students, setStudents] = useState([]); ///Biến lưu trữ
    // Câu hỏi phỏng vấn em dùng cách nào
    useEffect(() => {
        getListStudent();
    }, []);
    //Điều hướng chuyển màn
    constclickLogin = () => {
        navigation.navigate('Login');
    };

    async function getListStudent(){
        try{
            const API_URL = 'http://10.24.25.139:3000/students';
            const respinse = await fetch(API_URL);
            const data = await respinse.json();
            setStudents(data);
            return data;
        } catch(error) {
            console.error('ĐNgao' + error);
            return null;
        }
    }
    

    

    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <Image source={require('../Image/th.png')}/> 
        <Button title="Sing ing" onPress={constclickLogin}/>  
        <View>
            <Text style={styles.txtHeader}>List Student</Text>
        </View>
        <View style={styles.container} >
            {students.map((item, index) => {
                return(
                <View style={styles.item} key={index}>
                    <View style={styles.imtemImageContainer}>
                         {item.gender === 'Male' ? (
                                  <Image style={styles.itemImage} source={require('../Image/nammm.jpg')} resizeMode='contain'/>
                         ) : (
                            <Image style={styles.itemImage} source={require('../Image/nu.jpg')} resizeMode='contain'/>
                         )}
                    </View>
                    <View  style={{paddingLeft: 15}}>
                    <Text>{item.studentId}</Text>
                                    <Text>{item.fullName}</Text>
                                    <Text>{item.gender}</Text>
                                    <Text>{item.email}</Text>
                                    <Text>{item.dateOfBirth}</Text>
                    </View>

                </View>);
            })}

        </View>
        
        
        </ScrollView>
          
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1 
        
    
    },

    txtHeader:{
        fontSize: 18,
        fontWeight: "bold"

    },
    txtName:{
        fontSize: 16,
        fontWeight: "bold"

    },
    itemList:{
        paddingVertical: 15,
        borderBottomColor:"#e2e2e2",
        borderBottomWidth:0.5
    },
    txtBar:{
        fontSize: 22,
        fontWeight: "bold"
    },
    headerBar:{
        backgroundColor:"#e1e1e1",
        padding: 20
    },
    icon:{
        width:100,
        height:100,
        borderRadius: 100,
        backgroundColor: "#e6e6e6"
    },
    itemImage:{
        flex: 1,
        width: undefined,
        height: undefined
    },
    imtemImageContainer:{

        width: 100,
        height: 100,
        borderRadius: 100
    },
    item: {
        paddingVertical: 15,
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 0.5,
        flexDirection: 'row'
    }
})
export default ListProduct;