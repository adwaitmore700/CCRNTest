import { Button, View } from 'react-native';

import React from 'react'

export default class DetailsScreen extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return <View style={{flex:1,backgroundColor:'pink'}}><Button title="Home" onPress={()=>{
            this.props.navigation.navigate("Home");
        }}></Button></View>
    }
}