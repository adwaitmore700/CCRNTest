import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'

import {GET_COUNTRY_DETAILS} from '../redux/actions/applicationActions';
import { TextInput } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            country:"",
            showLoading:false
        }
    }

    componentDidMount(){
        
    }

    onInputTextChange =(country)=>{
        this.setState({country})
    }

    onSubmitButtonClick = async ()=>{
        //make api call
        
        if(this.state.country){
            //this.setState({showLoading:true});
            //this.props.dispatch(GET_COUNTRY_DETAILS(this.state.country));
            this.props.navigation.navigate("CountryDetails",{countryName:this.state.country});
            // if(){
            //     alert("success");
            //     //navigate
            // }
            // else{
            //     alert("Failed");
            //     //not navigate
            // }
            this.setState({showLoading:false});
        }
    }

    render(){
        return(
        <View style={styles.container}>
        <ActivityIndicator style={styles.loader} size='large' animating={this.state.showLoading}/>
            <TextInput placeholder="Enter country" style={styles.inputText} onChangeText={this.onInputTextChange}></TextInput>
            <TouchableOpacity disabled={this.state.country == ""} style={styles.submitBtn} onPress={this.onSubmitButtonClick}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>);

    }

}

// export default HomeScreen = (props)=>{
//     const [pageNo, setPageNo] = useState(1);
//     const [loading,setLoading] = useState(true);
//     //setPageNo(2);
//     const posts = useSelector(state=>state.app.posts);
//     const dispatch = useDispatch();
//     return <View style={{flex:1,backgroundColor:'green'}}><Button title="Details" onPress={()=>{
//         //props.navigation.navigate("Details");
//         setLoading(false);
//         console.log(pageNo);
//         dispatch(GET_POSTS(pageNo));
//     }}></Button><FlatList
//                 data={posts}
//                 keyExtractor={(item) => item.key}
//                 renderItem={itemData => (
//                     <TouchableOpacity style={styles.card} onPress={() => {
//                         //navigateToDetails(itemData.item)
//                     }}>
//                         <Text style={styles.text}>
//                             Title: {itemData.item.title}
//                         </Text>
//                         <Text style={styles.text}>
//                             URL: {itemData.item.url}
//                         </Text>
//                         <Text style={styles.text}>
//                             Created At:  {new Date(itemData.item.created_at).toDateString()}
//                         </Text>
//                         <Text style={styles.text}>
//                             Author: {itemData.item.author}
//                         </Text>
//                     </TouchableOpacity>
//                 )}
//                 onEndReached={() => {
//                     setPageNo(pageNo + 1);
//                     dispatch(GET_POSTS(pageNo));
//                 }}
//                 onEndReachedThreshold={.5}
//                 numColumns={1}
//             />
//             {loading && <ActivityIndicator size="large" color="blue" />}
//         </View>;
// }

/* <LinearGradient
          key={'HEADER'}
          style={styles.mainContainer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FF8200', '#FFBB47', '#FFE266']}>
          {this.props.title == 'Pravinya Academy' ? (
            <Image
              source={require('../../assets/app-icon.png')}
              style={{
                height: 40,
                width: 40,
                resizeMode: 'contain',
                marginLeft: 10,
              }}
            />
          ) : null}
          <Text
            allowFontScaling={false}
            numberOfLines={2}
            style={styles.textStyle}>
            {title}
          </Text>
        </LinearGradient> */

  // upgrade our component to become Redux-aware
  export default connect()(HomeScreen);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:15
    },
    loader:{
        position:'absolute',
        alignSelf:'center'
    },
    inputText : {
        alignSelf:'stretch',
        height:60,
        borderColor:'#000034',
        borderWidth:1,
        borderRadius:10,
        fontSize:18,
        marginBottom:15,
        paddingHorizontal:10
    },
    submitBtn :{
        backgroundColor:'#898889',
        width:150,
        paddingHorizontal:15,
        paddingVertical:10
    },
    buttonText:{
        fontSize:16,
        color:'#fff',
        textAlign:'center'
    }
})