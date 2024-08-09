import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import "../global.css";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const [inputText, setInputText] = useState("");

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: (tasks.length + 1).toString(), text: inputText },
    ]);
  };

  return (
    <View className="flex-1 bg-pj-raisin-black p-4">
      <StatusBar backgroundColor="hsla(236, 18%, 19%, 1)" />
      <Text className="text-pj-silver text-2xl font-bold mb-4 text-center font-mono">
        BXP - Todo List
      </Text>

      <Text className="text-white font-bold">Create a new task:</Text>

      <TextInput
        placeholder="insert new task"
        className="bg-neutral-900 placeholder:text-pj-silver text-white my-4 rounded-xl pl-2"
        value={inputText}
        onChangeText={setInputText}
      ></TextInput>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View className="bg-neutral-700 p-4 mb-2 rounded-lg">
            <Text className="text-pj-silver font-bold text-lg">
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        className="bg-pj-steel-blue p-4 rounded-lg mt-4 items-center"
        onPress={addTask}
      >
        <Text className="text-pj-silver text-lg font-bold">Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
