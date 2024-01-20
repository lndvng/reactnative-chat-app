import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ChatListScreen = (props) => {
    return <View style={styles.container}>
        <Text>Chat List Screen</Text>

        <Button title='Navigate to Chat Screen' onPress={() => props.navigation.navigate('ChatScreen') }/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default ChatListScreen;