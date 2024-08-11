import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { editTask, getData } from "../../utils/utils";

const SingleTaskScreen = () => {
  const { taskId } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [currentTask, setCurrentTask] = useState({});

  useEffect(() => {
    const fetchCurrentTask = async () => {
      try {
        const tasks = await getData();
        tasks.map((task) => {
          if (task.id == taskId) {
            setCurrentTask(task);
          }
        });
      } catch (error) {
        console.log("Error while fetching the task");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentTask();
  }, []);

  const handleTaskUpdate = async () => {
    try {
      setLoading(true);
      await editTask(taskId, currentTask.text);
    } catch (error) {
      console.log("Error while updating the task", error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <View className="bg-pj-raisin-black h-screen text-white flex flex-col items-center pb-[10vh] justify-center">
      <ActivityIndicator size="large" color="#dad740" />
    </View>
  ) : (
    <View className="bg-pj-raisin-black h-screen text-white flex flex-col items-center pt-5 px-4">
      <Text className="self-start pl-2 text-white font-bold text-xl">
        Edit Task:
      </Text>
      <TextInput
        className="bg-neutral-900  text-white my-4 rounded-xl  placeholder:text-pj-silver text-2xl font-bold p-4 min-w-full"
        multiline
        value={currentTask.text}
        onChangeText={(text) => setCurrentTask((prev) => ({ ...prev, text }))}
        placeholder="Edit your task"
      />
      <TouchableOpacity
        className="bg-pj-steel-blue p-4 rounded-lg items-center w-full"
        onPress={handleTaskUpdate}
      >
        <Text className="text-pj-silver text-lg font-bold">Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingleTaskScreen;

const styles = StyleSheet.create({});
