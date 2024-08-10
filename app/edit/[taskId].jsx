import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SingleTaskScreen = () => {
  const { taskId } = useLocalSearchParams();

  console.log(`this is the task: ${taskId}`);
  return (
    <View className="bg-pj-raisin-black h-screen text-white flex flex-col items-center justify-center">
      <Text className="text-white">SingleTaskScreen</Text>
    </View>
  );
};

export default SingleTaskScreen;

const styles = StyleSheet.create({});
