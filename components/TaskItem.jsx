import {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import Button from "./Button";
import TextInput from "./TextInput";

const TaskItem = ({
  item,
  onDelete,
  onUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");

  const handleClickValidate = () => {
    if (!isEditing) {
      setIsEditing(true);
      setTitle(item.title)
      return;
    }

    if (!title) return;
    setIsEditing(false);
    onUpdate(item.id, {...item, title});
  }

  return (
    <View style={styles.container}>
      {isEditing ? 
        <TextInput
          style={{flex: 1}}
          value={title}
          onChangeText={setTitle}
        />
      :
        <Text style={styles.title}>{item.title}</Text>
      }
      <View style={{flexDirection: "row", gap: 3}}>
        <Button color="secondary" title={isEditing ? "Valider" : "Edit"} onPress={handleClickValidate} />
        <Button color="danger" title="X" onPress={() => onDelete(item.id)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#BBB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 25
  },
  title: {
    fontSize: 28
  }
});

export default TaskItem;