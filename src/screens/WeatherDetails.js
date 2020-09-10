import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native'

import {GET_WEATHER_DETAILS} from '../redux/actions/applicationActions'
import React from 'react';
import {connect} from 'react-redux';

class WeatherDetailsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            capital:this.props.route.params.capital,
            showLoader:true
        }
    }

    componentDidMount(){
        //this.setState({showLoader:true});
        this.props.dispatch(GET_WEATHER_DETAILS(this.state.capital));
        //this.setState({showLoader:false});
    }

    render(){
        if(this.props.weatherDetails){
            return <View style={styles.container}>
            <View style={styles.rowStyle}>
                <Text style={styles.textLeft}>Temperature : </Text>
                <Text style={styles.textRight}>{this.props.weatherDetails.temperature}</Text>
            </View>
            <View style={styles.rowStyle}>
                <Text style={styles.textLeft}>Wind Speed : </Text>
                <Text style={styles.textRight}>{this.props.weatherDetails.wind_speed}</Text>
            </View>
            <View style={styles.rowStyle}>
                <Text style={styles.textLeft}>Precipitation : </Text>
                <Text style={styles.textRight}>{this.props.weatherDetails.precip}</Text>
            </View>
            <View style={styles.rowStyle}>
                <Text style={styles.textLeft}>Weather Icon : </Text>
                <Image style={styles.icon} source={{uri:this.props.weatherDetails.weather_icon}} ></Image>
            </View>
    </View>
        }
        else{
            return <ActivityIndicator style={styles.loader} size='large' animating={this.state.showLoader}/>
        }
        
    }
}

mapStateToProps =(state)=>{
    return {
        weatherDetails : state.app.weatherDetails
    }
}

export default connect(mapStateToProps)(WeatherDetailsScreen);


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        padding:15
    },
    loader:{
        position:'absolute',
        alignSelf:'center'
    },
    rowStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    textLeft:{
        fontSize:16,
        fontWeight:'700',
        color:'grey'
    },
    textRight:{
        fontSize:15,
        fontWeight:'400',
        color:'#000'
    },
    submitBtn :{
        backgroundColor:'#898889',
        width:150,
        paddingHorizontal:15,
        paddingVertical:10
    },
    icon:{
        height:30,
        width:30,
        resizeMode:'cover'
    }
});