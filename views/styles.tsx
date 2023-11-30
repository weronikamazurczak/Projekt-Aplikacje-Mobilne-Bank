import { StyleSheet } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native'; 

const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    ladowanie:{
        flex: 1,
    },
    kropk1:{
        justifyContent: 'center',
        paddingTop: -20,
    },
    img:{
        height: 424,
        width: 390,
        marginTop: -90, 
    },
    tytul:{
        fontSize: 35,
        padding: 10,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        lineHeight: 40,
        marginTop: -40,
        marginBottom: 15,
    },
    podtytul:{
        fontSize: 18,
        padding: 10,
        color: '#000',
        lineHeight: 20,
        marginTop: -20,
        paddingLeft: 20,
        paddingRight: 20,
        letterSpacing: 1,
    },
    ladowanie1:{
        flex: 1,
        
    },
    splash:{
        alignSelf: 'center',
        width: windowWidth, 
        height: windowHeight / 2, 
        resizeMode: 'contain', 
        marginTop: windowHeight / 2.7,
        maxHeight: 133,
        maxWidth: 200,
    },
    nextButton:{
        width: 300,
        height: 40,
        backgroundColor: '#5AE4A8',
        color: '#fff',
        alignItems: 'center',
        marginRight: 45,
        borderRadius: 10,
        marginBottom: 20,
    },
    skipButton:{
        marginBottom: windowHeight / 0.57,
        marginLeft: windowWidth / 2,
        marginRight: -windowWidth / 1.2,
        alignSelf: 'center',

    }
    });

export default styles;