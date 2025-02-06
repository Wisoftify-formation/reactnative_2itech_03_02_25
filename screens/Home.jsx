import {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import useTodos from "../hooks/useTodos";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import TaskItem from "../components/TaskItem";

function Home() {
  const navigation = useNavigation();
  const {
    todos,
    onDeleteTodo,
    onUpdateTodo
  } = useTodos();

  return (
      <View style={{paddingTop: 20, paddingHorizontal: 20, flex: 1}}>
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