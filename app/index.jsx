import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TaskItem from "../components/TaskItem";
import "../global.css";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const [inputText, setInputText] = useState("");

  const addTask = () => {
    if (inputText.trim() == "") return;
    setTasks([
      ...tasks,
      { id: (tasks.length + 1).toString(), text: inputText },
    ]);
    setInputText("");
  };

  return (
    <View className="flex-1 bg-pj-raisin-black p-4">
      <StatusBar backgroundColor="hsla(236, 18%, 19%, 1)" />
      <Text className="text-pj-silver text-2xl font-bold mb-10 text-center">
        BXP - Todo List
      </Text>

      <Text className="text-white font-bold text-2xl">Create a new task:</Text>

      <TextInput
        placeholder="insert new task"
        className="bg-neutral-900 placeholder:text-pj-silver text-white my-4 rounded-xl pl-2 py-2 placeholder:text-opacity-40"
        value={inputText}
        onChangeText={setInputText}
      ></TextInput>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem item={item} />}
        keyExtractor={(item) => item.id}
        className="flex flex-col gap-2"
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
