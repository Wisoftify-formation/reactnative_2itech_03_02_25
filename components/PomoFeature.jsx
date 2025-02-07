import { useEffect, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Vibration} from "react-native";
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {usePomoContext} from "../contexts/PomoContext";
import dayjs from "dayjs";

export default function PomoFeature() {
  const [{start, state, duration}, dispatch] = usePomoContext();
  const [displayDuration, setDisplayDuration] = useState("25:00");

  useEffect(() => {
    if (state === "stopped") return;

    const refresh = () => {
      const now = dayjs();
      const diff = now.diff(start, "second");
      const remaining = duration * 60 - diff;
      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      setDisplayDuration(`${minutes}:${seconds.toString().padStart(2, "0")}`);
      if (remaining <= 0) {
        dispatch({type: "STOP"});
        setDisplayDuration("00:00");
        Vibration.vibrate([1000, 1000, 1000]);
      }
    }

    const id = setInterval(() => refresh(), 1000);
    refresh();

    return () => {
      console.log(id);
      clearInterval(id)
    };
  }, [state]);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
        <Text style={styles.chrono}>{displayDuration}</Text>
        {state === "started" ?
          <TouchableOpacity onPress={() => dispatch({type: "STOP"})}>
            <FontAwesome6 name="circle-stop" iconStyle="solid" size={38} color="#444" />
          </TouchableOpacity>
        : null}
      </View>
      {state === "stopped" ? 
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => dispatch({type: "START", payload: {duration: 25}})} style={[styles.action, {backgroundColor: "#ba4949"}]}>
            <Text style={styles.actionTitle}>25m</Text>
            <FontAwesome6 name="circle-play" iconStyle="solid" size={25} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({type: "START", payload: {duration: 0.2}})} style={[styles.action, {backgroundColor: "#38858a"}]}>
            <Text style={styles.actionTitle}>5m</Text>
            <FontAwesome6 name="circle-play" iconStyle="solid" size={25} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({type: "START", payload: {duration: 15}})} style={[styles.action, {backgroundColor: "#397097"}]}>
            <Text style={styles.actionTitle}>15m</Text>
            <FontAwesome6 name="circle-play" iconStyle="solid" size={25} color="white"/>
          </TouchableOpacity>
        </View>
      : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center", 
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c2c2c2",
    borderRadius: 8,
    marginBottom: 5,
    paddingVertical: 10,
    gap: 15
  },
  chrono: {
    fontSize: 46,
  },
  actions: {
    flexDirection: "row",
    gap: 10
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 5
  },
  actionTitle: {
    fontSize: 20,
    color: "white"
  }
})