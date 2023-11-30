import { View, Image, Text } from '@gluestack-ui/themed';
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';


export default function OnboardScreens() {
  return (
    <View style={styles.ladowanie}>
    <Onboarding 
    onDone={()=>{console.log('login')}}
pages={[
  {
    backgroundColor: '#fff',
    image: (
      <View style={styles.kropk1}>
        <Image style={styles.img} source={require('../assets/Start1.png')} alt="test" />
      </View>
    ),  
    title:(
        <Text style={styles.tytul}>
          Bezpieczny i godny zaufania
        </Text>
    ), 
    subtitle:(
      <Text style={styles.podtytul}>
        Poznaj naszą bankową aplikację, która zapewnia najwyższy poziom bezpieczeństwa i zaufania. Twoje finanse są u nas w dobrych rękach.
      </Text>
    ) 
  },
  {
    backgroundColor: '#fff',
    image:(
      <View style={styles.kropk1}>
         <Image style={styles.img} source={require('../assets/Start2.png')} alt="test" />
         </View>
    ),
    
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
  {
    backgroundColor: '#fff',
    image: <Image source={require('../assets/Start3.png')} alt="test" />,
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
]}
/>
    </View>
  )
}