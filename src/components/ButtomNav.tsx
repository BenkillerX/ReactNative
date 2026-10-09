import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

const ButtomNav = () => {
  return (
    <View style={styles.footer}>
      <Text>Buttom nav</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ButtomNav;