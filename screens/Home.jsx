import {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import useTodos from "../hooks/useTodos";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import TaskItem from "../components/TaskItem";

function Home() {
  const [title, setTitle] = useState("");
  const {
    todos,
    onCreateTodo,
    onDeleteTodo,
    onUpdateTodo
  } = useTodos();

  return (
      <View style={{paddingTop: 20, paddingHorizontal: 20, flex: 1}}>
        <TextInput
          label="Title"
          value={title}
          onChangeText={setTitle}
          placeholder="Title of your todo"
        />
        <Button title="Ajouter" color="secondary" onPress={() => {onCreateTodo(title); setTitle("");}} />
        <View style={{height: 1, backgroundColor: "black", marginVertical: 15}}></View>
        <ScrollView >
          {todos.map((i) => (
            <TaskItem
              key={i.id}
              item={i}
              onDelete={onDeleteTodo}
              onUpdate={onUpdateTodo}
            />
          ))}
        </ScrollView>
      </View>
  )
}

export default Home;