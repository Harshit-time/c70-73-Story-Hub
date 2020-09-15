import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen'; 


export default function App() {
  return (
    <AppContainer />
  );
}

const TabNavigator = createBottomTabNavigator({
  Write:{screen:WriteScreen},
  Read : {screen:ReadScreen}
},
{
defaultNavigationOptions:({navigation})=>({
tabBarIcon:({})=>{

  const routeName = navigation.state.routeName

  if(routeName === "Write"){
    return(
      <Image source = {require("./assets/write.png")}  style={{width:30,height:30}}/>
    );
  }  
  else if(routeName === "Read"){
    return(
      <Image source = {require("./assets/read.png")}  style={{width:30,height:30}}/>
    );
  }
}
})
})

const AppContainer = createAppContainer(TabNavigator); 










/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


