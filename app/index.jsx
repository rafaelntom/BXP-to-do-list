import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Task 1" },
    { id: "2", text: "Task 2" },
  ]);

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: (tasks.length + 1).toString(), text: `Task ${tasks.length + 1}` },
    ]);
  };

  return (
    <View className="flex-1 bg-pj-raisin-black p-4">
      <StatusBar backgroundColor="hsla(236, 18%, 19%, 1)" />
      <Text className="text-pj-silver text-2xl font-bold mb-4">
        BXP - Todo List
      </Text>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View className="bg-pj-cinereous p-4 mb-2 rounded-lg">
            <Text className="text-white font-bold text-lg">{item.text}</Text>
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
