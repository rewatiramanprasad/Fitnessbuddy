import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children,onPress }) {
  const pressHandler = () => {
    console.log("Pressed!");
  };
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable onPress={onPress} style={styles.buttonInnerContainer} android_ripple={{ color: "#640233" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
    buttonOutterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow:'hidden'
    },
  buttonInnerContainer: {
    backgroundColor:'orangered',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
