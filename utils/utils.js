import AsyncStorage from "@react-native-async-storage/async-storage";

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

const getTaskById = async (taskId) => {
  try {
    const tasks = await getData();
    const task = tasks.find((t) => t.id === taskId);
    return task;
  } catch (error) {
    console.error("Error getting task by ID:", error);
  }
};

const addTask = async (tasks, inputText) => {
  if (inputText.trim() === "") return tasks;

  const newTasks = [
    { id: (tasks.length + 1).toString(), text: inputText, isDone: false },
    ...tasks,
  ];

  await storeData(newTasks);
  return newTasks;
};

const editTask = async (tasks, taskId, newText) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, text: newText } : task
  );
  await storeData(updatedTasks);
  return updatedTasks;
};

const removeTask = async (tasks, taskId) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  await storeData(updatedTasks);
  return updatedTasks;
};

const toggleTaskDone = async (tasks, taskId) => {
  console.log(taskId);
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, isDone: !task.isDone } : task
  );
  await storeData(updatedTasks);
  return updatedTasks;
};

export {
  storeData,
  getData,
  editTask,
  removeTask,
  toggleTaskDone,
  addTask,
  getTaskById,
};
