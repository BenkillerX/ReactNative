import { Text, View, StyleSheet, ImageBackground } from "react-native";
import heroBuilding from '@/assets/images/Quick2.jpg'
export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground source={heroBuilding} style={styles.image}>
      <Text style={styles.text}>Dev Ben is cooking</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'red'
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  text:{
    color: 'blue',
    textAlign:'center'
  }
});
