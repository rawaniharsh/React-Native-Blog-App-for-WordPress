import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import PostCard from '../components/PostCard';

class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <PostCard/>
                <Button  
                buttonStyle={{
                    backgroundColor: Colors.primary
                }}  
                containerStyle={{ marginVertical: 10, height: 50, width: 250 }}        
                onPress={()=>{this.props.navigation.navigate('Post')}}
                title="Post Detail"/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;