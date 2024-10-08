import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="edit/[taskId]" options={{ title: "Edit Task" }} />
    </Stack>
  );
};

export default RootLayout;
