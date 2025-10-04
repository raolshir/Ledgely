import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          //   tabBarIcon: () => <TabIcon />,
        }}
      />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="stat" options={{ title: "Stat" }} />
      <Tabs.Screen name="storage" options={{ title: "Storage" }} />
    </Tabs>
  );
}
