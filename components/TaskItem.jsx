import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import "../global.css";
import { getTaskById } from "../utils/utils";

const TaskItem = ({ item }) => {
  const handleEdit = async () => {
    const task = await getTaskById(item.id);
    console.log(`Task found: ${JSON.stringify(task)}`);
  };

  return (
    <View
      className={`flex flex-row justify-between px-3 py-5 rounded-xl items-center mb-4 ${
        item.isDone ? `bg-green-300` : `bg-red-800`
      }`}
    >
      <Text
        className="text-white font-bold text-xl flex-grow pr-4"
        numberOfLines={3}
        ellipsizeMode="tail"
        style={{ flex: 3 }}
      >
        {item.text}
      </Text>
      <View className="flex-row gap-4">
        <TouchableOpacity>
          <Ionicons name="checkmark" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href={`/edit/${item.id}`}>
            <Ionicons
              name="pencil"
              size={24}
              color="white"
              onPress={handleEdit}
            />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;
