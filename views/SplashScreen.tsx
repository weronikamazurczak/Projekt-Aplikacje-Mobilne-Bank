import { View, Image } from "@gluestack-ui/themed";
import styles from "./styles";
import { useEffect } from "react";

export default function SplashScreen(props: { navigation: any }) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("OnboardScreens");
    }, 2000);
  }, []);
  return (
    <View style={styles.ladowanie1}>
      <Image
        alt="logo"
        source={require("../assets/logo.png")}
        style={styles.splash}
      />
    </View>
  );
}
