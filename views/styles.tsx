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
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,
        elevation: 4,
    },
    skipButton:{
        marginBottom: windowHeight / 0.57,
        marginLeft: windowWidth / 2,
        marginRight: -windowWidth / 1.2,
        alignSelf: 'center',

    },
    register:{
        flex: 1,

    },
    titleRegister:{
        width: 200,
        height: 34,
        fontWeight: 'bold',
        fontSize: 32,
        marginTop: '5%',
        paddingTop: 9,
        marginLeft: '7%',
        color: '#000',
    },
    arrow:{
        width: 50,
        height: 50,
        marginTop: '15%',
        marginBottom: '3%',
        marginLeft: '5%',
    },
    bottomTitle:{
        width: 310,
        height: 50,
        fontSize: 12,
        color: '#C1C1C1',
        marginLeft: '7%',
        padding: 3,

    },
    label: {
        fontSize: 12 ,
        marginLeft: '7%',
        color: '#000',
    },
    box:{
        marginLeft: '6%', 
        width: '88%',
        padding: 7,
        paddingLeft: 15,
        borderRadius: 10,
        columnGap: 10,
    },
    registerNextButton:{
        width: 349,
        height: 39,
        backgroundColor: '#5AE4A8',
        color: '#fff',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: '15%',
        marginBottom: '3%',
        marginLeft: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,
        elevation: 4,
    },
    titleAddCard:{
        width: 200,
        height: 34,
        fontWeight: 'bold',
        fontSize: 32,
        marginTop: '5%',
        paddingTop: 9,
        marginLeft: '7%',
        color: '#000', 
        marginBottom:40,
    },
    checkTitleStyle:{
        fontSize: 12 ,
        color: '#C1C1C1',
        
    }
    ,addCardNaxtButton:{
        width: 349,
        height: 39,
        backgroundColor: '#5AE4A8',
        color: '#fff',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: '5%',
        marginBottom: '3%',
        marginLeft: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,
        elevation: 4,
    },
    main:{
        flex: 1,
    },
    awatar:{
        height: 50,
        marginLeft: '5%',
        marginTop:'5%',
    },
    bell:{
        position: 'absolute',
        marginLeft: '81%',
        marginTop: '5%',
    },
    card:{
        width: 340,
        height: 180,
        color:'#5AE4A8'
    }
    
});

export default styles;