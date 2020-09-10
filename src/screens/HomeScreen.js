import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'

import {GET_POSTS} from '../redux/actions/postsActions';

class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pageNo:1,
            loading:true
        }
    }

    componentDidMount(){
        this.props.dispatch(GET_POSTS(this.state.pageNo));
    }

    render(){
        return <View style={{flex:1,backgroundColor:'green'}}><Button title="Details" onPress={()=>{
            //props.navigation.navigate("Details");
            setLoading(false);
            console.log(pageNo);
            dispatch(GET_POSTS(pageNo));
        }}></Button><FlatList
                    data={this.props.posts}
                    keyExtractor={(item) => item.key}
                    renderItem={itemData => (
                        <TouchableOpacity style={styles.card} onPress={() => {
                            //navigateToDetails(itemData.item)
                        }}>
                            <Text style={styles.text}>
                                Title: {itemData.item.title}
                            </Text>
                            <Text style={styles.text}>
                                URL: {itemData.item.url}
                            </Text>
                            <Text style={styles.text}>
                                Created At:  {new Date(itemData.item.created_at).toDateString()}
                            </Text>
                            <Text style={styles.text}>
                                Author: {itemData.item.author}
                            </Text>
                        </TouchableOpacity>
                    )}
                    onEndReached={() => {
                        this.setState({pageNo:this.state.pageNo+1});
                        this.props.dispatch(GET_POSTS(this.state.pageNo));
                    }}
                    onEndReachedThreshold={.5}
                    numColumns={1}
                />
                {this.state.loading && <ActivityIndicator size="large" color="blue" />}
            </View>;
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

const mapStateToProps = state => {
    return {
      posts: state.app.posts,
    };
  };
  
  // upgrade our component to become Redux-aware
  export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    },
    card: {
        flex: 1,
        width: "100%",
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 5,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 16,
        paddingBottom: 5
    }
})