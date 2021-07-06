import * as React from 'react';
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';


export default class OldAccept extends React.Component{
constructor(){
    super()
    this.state = {
        requestMade : []
    }
    this.requestRef = null
}

getRequestedBooksList=()=>{
    this.requestRef = db.collection('requested_books')
    .onSnapshot(snapshot=>{
        var requestMade = snapshot.docs.map(document=>document.data())
        this.setState({
            requestMade:requestMade
        })
    })
}
componentDidMount(){
    this.getRequestedBooksList()
}

componentWillUnMount(){
    this.requestRef()
}
keyExtractor = (item,index)=>index.toString()

renderItem=({item,i})=>{
    return(
        <ListItem 
        key = {i}
        title = {item.requestor_Name}
        subtitle = {item.reason_for_request}
        titleStyle = {{color:'black', fontWeight:'bold'}}
        rightElement = {
            <TouchableOpacity style = {styles.button}>
                <Text style = {{color:'white'}}>View</Text>
            </TouchableOpacity>
        }

        bottomDivider
        />
    )
}
    render(){
        return(
            <View style = {{flex:1}}>
                
                    {
                        this.state.requestMade.length===0
                        ?(
                            <View style = {{flex:1,fontSize:20,justifyContent:'center',alignItems:'center'}}>
                                <Text style = {{fontSize:20}} >List of all requests Made</Text>
                                </View>
)
:(
                             
                            <FlatList 
                            keyExtractor = {this.keyExtractor}
                            data = {this.state.requestMade}
                            renderItem = {this.renderItem}
                            
                            />
                        )
                    }
                </View>
          
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8
        }

    }
})