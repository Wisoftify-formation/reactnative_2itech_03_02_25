import {View, Text, StyleSheet} from "react-native";
import Button from "./Button";

const TaskItem = ({
  item,
  onDelete
}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Button color="danger" title="X" onPress={() => onDelete(item.id)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#BBB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 56
  }
});

export default TaskItem;