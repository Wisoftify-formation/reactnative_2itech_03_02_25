import {useState} from "react";
import {View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import useTodos from "../hooks/useTodos";

export default function Create() {
  const [title, setTitle] = useState("");
  const {onCreateTodo} = useTodos();
  const navigation = useNavigation();

  const handleCreate = () => {
    onCreateTodo(title);
    setTitle("");
    navigation.goBack();
  }

  return (
    <View style={{padding: 20}}>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        placeholder="Title of your todo"
        />
      <Button
        title="Ajouter"
        color="secondary"
        onPress={handleCreate}
      />
    </View>
  );
}