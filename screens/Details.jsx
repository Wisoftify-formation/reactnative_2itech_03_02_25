import {View, Text} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;

  return (
    <View>
      <Text>Hello chui arrivé {id}</Text>
      <Button title="Go Home" onPress={() => {
        navigation.goBack();
      }}/>
    </View>
  )
}