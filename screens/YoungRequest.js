import * as React from 'react';
import {View,StyleSheet,Text,FlatList,TouchableOpacity,TextInput,KeyboardAvoidingView,Alert} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';


export default class YoungRequest extends React.Component{
constructor(){
    super()
    this.state={
        userId : firebase.auth().currentUser.email,
        requestorName : ' ',
        reasonforRequest: ' '
    }
}

createUniqueId(){
    return Math.random().toString(36).substring(7)
}

addRequest=(requestorName,reasonforRequest)=>{

    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requests').add({
        "user_id" : userId,
        "requestor_name" : requestorName,
        "reason_for_request" : reasonforRequest,
        "request_id"  : randomRequestId
    })
this.setState({
    requestorName :  ' ',
    reasonforRequest :  ' '
})
return Alert.alert("Request done successfully")
}
    render(){
        return(
            <KeyboardAvoidingView style = {styles.keyBoardStyle}>
                <View style = {{ flex:1,alignItems:'center', justifyContent:'center'}}>
                <TextInput 
                style = {styles.inputBox}
                placeholder = {"enter name"}
                onChangeText = {(text)=>{
                    this.setState({ requestorName: text})
                }}
                value = {this.state.requestorName}
                />
                <TextInput 
                style = {styles.inputBox}
                placeholder = {"reason for Request"}
                onChangeText = {(text)=>{
                    this.setState({ reasonforRequest: text})
                }}
                value = {this.state.reasonforRequest}
                />
                <TouchableOpacity style = {styles.button} 
                onPress = {()=>{
                    this.addRequest(this.state.requestorName,this.state.reasonforRequest)
                }}>
                    <Text>Request</Text>
                </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = {
    keyBoardStyle:{
        flex:1,
        alignItems : 'center',
        justifyContent: ' center'
    },
    inputBox:{
        width:'75%',
        height:35,
        alignSelf:'center',
        borderColor:'black',
        borderRadius: 10,
        borderWidth:2,
        marginTop:20,
        padding:10
    },
    button:{
        width:'75%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'grey'
    }
}