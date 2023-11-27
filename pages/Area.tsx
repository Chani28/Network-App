import { StatusBar } from 'expo-status-bar';
import { TextInput,StyleSheet, Text, View ,FlatList,Button, Image} from 'react-native';
import React,  { useState ,useEffect} from 'react';

let initialProducts = [];


export default function Area() {

    const [search,setSearch]= useState("");
    const [products,setProducts]= useState(initialProducts);
  
   useEffect(() => {
    fetch("https://gocode-rn.glitch.me/products")
    .then(res => res.json())
    .then (data => {initialProducts = data; setProducts(data);})
    
   },[])
  
    const renderProduct = ({item}) => (
      <View style = {styles.product}>
      <View style={{flex:1}}>
    
         <Text style ={styles.text}>{item.title}</Text>
         
        </View> 
        </View>
    );
  
    const handleSearch =(search:any) => {
      setSearch(search);
      setProducts(
      initialProducts.filter((products) =>
        products.title.toLowerCase().includes(search.toLowerCase()) 
      )
        );
    };
    return (
      
      <View style={styles.container}>
      <View>
      <Text style={{paddingTop:80,fontSize:35,paddingRight:15}}>קשר  </Text>
      <View style={styles.searchSection}>
      
        <TextInput
        placeholder ="חפש או הזן רשת" 
          style={styles.input}
          onChangeText={(text ) => handleSearch(text)}
          value={search}
          
          
          placeholderTextColor="#9F9EA3" 
          
        />
       
                  </View>
                  <>
       <FlatList
  
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
        />
        
        </>
      </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      marginTop: 30,
    },
    
    product:{
      flex:1,
      width: "100%",
      height: 40,
      margin: 12,
      
      alignSelf: "center",
      backgroundColor : "#FFFFFF" ,
      elevation : 5,
      
      
    },
    input:{
      flex: 1,
      height: 40.5,
      margin: 12,
      padding: 10,
      
      backgroundColor : "#E4E3EA" ,
      borderRadius : 20,
      color:"#9F9EA3",
    },
    text:
    {
      fontSize:23,
      padding:3,
    },
    icon: {
      padding: 10,
  
      color:"#9F9EA3",
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image:{
    padding: 10,
    margin: 1,
    resizeMode: 'stretch',
    alignItems: 'center',
    color:"#9F9EA3",
  
  },
  });
  