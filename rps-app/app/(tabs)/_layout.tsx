import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="start1" options={{ title: 'Start 1' }} />
      <Tabs.Screen name="start2" options={{ title: 'Start 2' }} />
      <Tabs.Screen name="start3" options={{ title: 'Start 3' }} />
    </Tabs>
  );
}
