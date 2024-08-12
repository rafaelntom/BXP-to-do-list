import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

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
    const storedTasks = await AsyncStorage.getItem("@tasks");
    return storedTasks != null ? JSON.parse(storedTasks) : [];
  } catch (e) {
    console.error("Error reading tasks:", error);
  }
};

const addTask = async (tasks, inputText) => {
  if (inputText.trim() === "") return tasks;

  const uniqueId = uuid.v4();

  const newTasks = [{ id: uniqueId, text: inputText, isDone: false }, ...tasks];

  await storeData(newTasks);
  return newTasks;
};

const editTask = async (taskId, newText) => {
  const tasks = await getData();
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, text: newText.trim() } : task
  );
  await storeData(updatedTasks);
  return updatedTasks;
};

const removeTask = async (taskId) => {
  const tasks = await getData();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  await storeData(updatedTasks);
  return updatedTasks;
};

const changeTaskStatus = async (taskId) => {
  try {
    const tasks = await getData();

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      } else {
        return task;
      }
    });

    await storeData(updatedTasks);
  } catch (error) {
    console.log(`Error while updating the task:`, error);
  }
};

export { storeData, getData, editTask, removeTask, changeTaskStatus, addTask };
