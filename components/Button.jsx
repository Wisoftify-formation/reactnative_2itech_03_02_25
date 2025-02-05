import {View, Text, StyleSheet, Touchable, TouchableOpacity} from "react-native";

function Button({color, title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, colorStyles[color ?? "primary"]]}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
}

const colorStyles = StyleSheet.create({
  primary: {
    backgroundColor: "#6cabee"
  },
  secondary: {
    backgroundColor: "#c4def9"
  },
  danger: {
    backgroundColor: "#ff6154"
  },
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  titleText: {
    fontSize: 17,
    fontWeight: "400",
    color: "#202020",
  }
})

export default Button