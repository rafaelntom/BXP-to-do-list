import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import "../global.css";

const TaskItem = ({ item, onEdit, onDelete, onComplete }) => {
  return (
    <View className="bg-neutral-700 flex flex-row justify-between px-3 py-5 rounded-xl items-center mb-4">
      <Text
        className="text-white font-bold text-xl flex-grow pr-4"
        numberOfLines={3}
        ellipsizeMode="tail"
        style={{ flex: 3 }}
      >
        {item.text}
      </Text>
      <View className="flex-row gap-4">
        <TouchableOpacity onPress={onComplete}>
          <Ionicons name="checkmark" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit}>
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;
