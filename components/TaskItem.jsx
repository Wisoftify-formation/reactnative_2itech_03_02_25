import {Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const TaskItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Details", {id: item.id})}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#BBB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28
  }
});

export default TaskItem;