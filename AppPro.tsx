import React from "react";

// useColorScheme is used to provide the dark mode
//JSX.Element is the return type of the function that should always element
//align items works left to right in the flex direction in react native

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
            <Text>
                hello world
            </Text> 
       </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    whiteText: {
        color: 'white'
    }



})

export default AppPro;