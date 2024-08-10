import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TaskItem from "../components/TaskItem";
import "../global.css";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  // Load tasks when the page is loaded
  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await getData();

      if (savedTasks) {
        setTasks(savedTasks);
      }
    };

    loadTasks();
  }, []);

  // Making sure that the saved tasks are being updated everytime we change the state of the "tasks"
  useEffect(() => {
    storeData(tasks);
  }, [tasks]);

  const addTask = () => {
    if (inputText.trim() === "") return;
    const newTasks = [
      { id: (tasks.length + 1).toString(), text: inputText, isDone: false },
      ...tasks,
    ];
    setTasks(newTasks);
    setInputText("");
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@tasks", jsonValue);
    } catch (error) {
      console.error("Error storing tasks:", error);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@tasks");
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error("Error reading tasks:", error);
    }
  };

  return (
    <View className="flex-1 bg-pj-raisin-black p-4">
      <StatusBar backgroundColor="hsla(236, 18%, 19%, 1)" />
      <Text className="text-pj-silver text-2xl font-bold mb-10 text-center">
        BXP - Todo List
      </Text>

      <Text className="text-white font-bold text-2xl">Create a new task:</Text>

      <View className="flex-row items-center justify-center w-full gap-2">
        <TextInput
          placeholder="Insert new task..."
          className="bg-neutral-900  text-white my-4 rounded-xl pl-2 py-4 placeholder:text-pj-silver "
          value={inputText}
          onChangeText={setInputText}
          style={{ flex: 4 }}
        ></TextInput>
        <TouchableOpacity
          className="bg-pj-steel-blue p-4 rounded-lg items-center"
          onPress={addTask}
        >
          <Text className="text-pj-silver text-lg font-bold">Add Task</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem item={item} />}
        keyExtractor={(item) => item.id}
        className="flex flex-col gap-2"
      />
    </View>
  );
};

export default HomeScreen;
