import { View, Image, Text, Button, ButtonText, ArrowRightIcon, ButtonIcon } from '@gluestack-ui/themed';
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';



export default function OnboardScreens({navigation}:any ) {
  const [isDotHidden, setIsDotHidden] = React.useState(false);
  return (
    <View style={styles.ladowanie}>
    <Onboarding 
    bottomBarColor = "#fff"
    onDone={()=>{navigation.navigate('Register')}}
    DoneButtonComponent={Done}
    NextButtonComponent={Next}
    DotComponent={Square}
    SkipButtonComponent={Skip}
    onSkip={()=>{navigation.navigate('Register')}}
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
    image: (
      <View style={styles.kropk1}>
        <Image style={styles.img} source={require('../assets/Start2.png')} alt="test" />
      </View>
    ),  
    title:(
        <Text style={styles.tytul}>
          Szybkie transakcje
        </Text>
    ), 
    subtitle:(
      <Text style={styles.podtytul}>
        Z naszą aplikacją, przeprowadzanie transakcji jest szybsze i wygodniejsze niż kiedykolwiek. Bez zbędnych opóźnień, gwarantujemy efektywne operacje bankowe.
      </Text>
    ) 
  },
  {
    backgroundColor: '#fff',
    image: (
      <View style={styles.kropk1}>
        <Image style={styles.img} source={require('../assets/Start3.png')} alt="test" />
      </View>
    ),  
    title:(
        <Text style={styles.tytul}>
          Zarządzaj swoimi finansami
        </Text>
    ), 
    subtitle:(
      <Text style={styles.podtytul}>
       Dzięki naszej aplikacji masz pełną kontrolę nad swoimi finansami. Śledź wydatki, oszczędzaj, inwestuj i planuj swoją przyszłość finansową.
      </Text>
    ) 
  },
]}
/>
    </View>
  )
}

const Done = ({...props}) => {
  return(
<Button
  style={styles.nextButton}
      size="lg"
  variant="solid"
  action="primary"
  isDisabled={false}
  isFocusVisible={false}
  {...props}
>
  <ButtonText style={ {color:'#000'} }>Dalej</ButtonText>
  <ButtonIcon style={{color:'#000'}} as={ArrowRightIcon}/>
  </Button>
)};

const Next = ({...props}) => {
  return(
  <Button
  style={styles.nextButton}
      size="lg"
  variant="solid"
  action="primary"
  isDisabled={false}
  isFocusVisible={false}
  {...props}
>
  <ButtonText style={ {color:'#000'} }>Dalej</ButtonText>
  <ButtonIcon style={{color:'#000'}} as={ArrowRightIcon}/>
  </Button>
)};



const Square = (props:{selected:any}) => {
  let backgroundColor = props.selected ? '#1A2E35' : '#D9D9D9';
  return(
<View 
  style={{
    marginBottom: 500,
    width: 15,
    height: 15,
    marginHorizontal: 3,
    borderRadius: 10,
    backgroundColor,
  }}
/>
)};

const Skip = ({...props}) => {
  return(
<Button
  style={styles.skipButton}
  size="lg"
  variant="link"
  action="primary"
  isDisabled={false}
  isFocusVisible={false}
  {...props}
>
  <ButtonText style={{color: '#1A2E35'}}>Pomiń </ButtonText>
</Button>
)};