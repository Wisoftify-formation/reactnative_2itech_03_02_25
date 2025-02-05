import {View, Text, StyleSheet, TextInput as RNTextInput} from "react-native";

const TextInput = ({
  value,
  onChangeText,
  placeholder,
  style,
  label
}) => {

  return (
    <View style={[styles.container, style ?? {}]}>
      {label ? <Text style={styles.label}>{label}</Text> : <></>}
      <RNTextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  label: {
    marginBottom: 2
  },
  input: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 7,
  }
})

export default TextInput;