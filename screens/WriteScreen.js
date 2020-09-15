import React from 'react'; 
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView} from 'react-native'; 
import AppHeader1 from '../Screens/AppHeader1'

export default class WriteStoriesScreen extends React.Component{
    render(){
        return(
            <View style={{height:1300}}>
        
            <AppHeader1/>
             <TextInput style={styles.textIntro}
            placeholder = "Story Title"
            />

            <TextInput style={styles.textIntro}
            placeholder = "Author"
            />

            <TextInput  style={styles.textInput} 
            placeholder = "WriteStory here"
            />

            <TouchableOpacity style={styles.button}>
            <Text>Submit</Text>
            </TouchableOpacity>
    
        </View>
        )
    }
}


const styles=StyleSheet.create({
  textIntro:{
    borderWidth:4,
    borderRadius:2,
    height:50,
    width:1300,
    margin:30
  },  
  textInput:{
       borderWidth:4,
       borderRadius:2,
       height:200,
       width:1300,
       marginLeft:30,
       marginRight:30
  },
  button:{
   backgroundColor:"green",
   borderWidth:2,
   borderRadius:20,
   marginTop:30,
   alignItems:"center",
   justifyContent:"center",
   width:100,
   height:45,
   marginLeft:650
  }
})
