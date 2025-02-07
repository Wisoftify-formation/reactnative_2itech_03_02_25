import { useMemo, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import useTodos from "../hooks/useTodos";
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import TextInput from "../components/TextInput";
import PomoFeature from "../components/PomoFeature";

export default function Details() {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  const {todos, onUpdateTodo, onDeleteTodo} = useTodos();

  const todo = useMemo(() => todos.find(i => i.id === id), [todos, id]);

  if (!todo) return <Text>Loading...</Text>

  const handleUpdate = async () => {
    if (!title) return;
    await onUpdateTodo(id, {...todo, title});
    navigation.goBack();
  }
  const handleDelete = async () => {
    await onDeleteTodo(id);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1, gap: 20}}>
        <View style={styles.header}>
          <Text style={styles.title}>{todo.title}</Text>
          <TouchableOpacity onPress={() => {setTitle(todo.title); setIsEditing(true)}}>
            <FontAwesome6 name="pen-to-square" size={32} />
          </TouchableOpacity>
        </View>
        {isEditing ? 
          <View>
            <TextInput
              onChangeText={setTitle}
              value={title}
            />
            <Button color="primary" title="Valider" onPress={handleUpdate} />
          </View>
        : null}
      </View>
      <PomoFeature />
      <Button
        color="danger"
        onPress={handleDelete}
        title={<FontAwesome6 name="trash-can" size={32} color="white" />} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
})