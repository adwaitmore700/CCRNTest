import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {GET_COUNTRY_DETAILS} from '../redux/actions/applicationActions';
import React from 'react'
import {connect} from 'react-redux';

class DetailsScreen extends React.Component {

    constructor(props){
        super(props);
        //
        this.state = {
            countryName : this.props.route.params.countryName,
            showLoader:true
        }
    }

    componentDidMount(){
        //this.setState({showLoader:true});
        this.props.dispatch(GET_COUNTRY_DETAILS(this.state.countryName));
        //this.setState({showLoader:false});
    }

    render(){
        if(this.props.countryDetails){
            return <View style={styles.container}>
            <View style={styles.rowStyle}>
                <Text style={styles.textLeft}>Capital : </Text>
                <Text style={styles.textRight}>{this.props.countryDetails.capital}</Text>
            </View>
            <View style={styles.rowStyle}>
                <Text style={styles.textLeft}>Population : </Text>
                <Text style={styles.textRight}>{this.props.countryDetails.population}</Text>
            </View>
            <View style={styles.rowStyle}>
                <Text style={styles.textLeft}>Latitude : </Text>
                <Text style={styles.textRight}>{this.props.countryDetails.latlng[0]}</Text>
            </View>
            <View style={styles.rowStyle}>
                <Text style={styles.textLeft}>Longitude : </Text>
                <Text style={styles.textRight}>{this.props.countryDetails.latlng[1]}</Text>
            </View>
            <View style={styles.rowStyle}>
                <Text style={styles.textLeft}>Flag : </Text>
                <Image source={{uri:this.props.countryDetails.flag}} ></Image>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={this.onWeatherBtnClicked}>
                <Text style={styles.buttonText}>Capital Weather</Text>
            </TouchableOpacity>
    </View>
        }
        else{
            return <ActivityIndicator style={styles.loader} size='large' animating={this.state.showLoader}/>
        }
        
    }

    onWeatherBtnClicked = async ()=>{
            this.props.navigation.navigate("WeatherDetails",{capital:this.props.countryDetails.capital});
        }
}

mapStateToProps =(state)=>{
    
    return {
        countryDetails : state.app.countryDetails
    }
}

export default connect(mapStateToProps)(DetailsScreen);

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
        paddingVertical:10,
        textAlign:'center',
        alignSelf:'center',
        borderRadius:10
    },
    buttonText:{
        fontSize:16,
        color:'#fff',
        textAlign:'center',
        
    }
});