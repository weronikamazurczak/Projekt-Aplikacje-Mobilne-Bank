import { View, Image } from '@gluestack-ui/themed';
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardScreens() {
  return (
    <View style={{flex:1, alignItems:'center'}}>
    <Onboarding 
    onDone={()=>{console.log('login')}}
pages={[
  {
    backgroundColor: '#fff',
    image: <Image source={require('../assets/favicon.png')} alt="test" />,
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
  {
    backgroundColor: '#fff',
    image: <Image source={require('../assets/favicon.png')} alt="test" />,
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
  {
    backgroundColor: '#fff',
    image: <Image source={require('../assets/favicon.png')} alt="test" />,
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
]}
/>
    </View>
  )
}