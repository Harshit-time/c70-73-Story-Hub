import React from 'react';
import {Text,View,} from 'react-native';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1,alignItems:'center', justifyContent:'center'}}>
                <Text>Read a story</Text>
            </View>
        )
    }
}
