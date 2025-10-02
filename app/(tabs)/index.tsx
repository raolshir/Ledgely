import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Only load global.css on web; Metro doesn't process raw CSS on native.
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 w-full items-center justify-center bg-neutral-50 dark:bg-neutral-900 gap-6 p-6">
      <Text className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
        Tailwind + NativeWind Active
      </Text>
      <Text className="text-base text-neutral-700 dark:text-neutral-300">
        Edit <Text className="font-semibold">app/(tabs)/index.tsx</Text> to test
        classes.
      </Text>
      <Text className="rounded-full bg-emerald-100 dark:bg-emerald-800/40 px-4 py-2 text-emerald-700 dark:text-emerald-300 font-medium">
        Utility classes applied ✓
      </Text>
      <Text className="mt-4 border border-dashed border-pink-400 dark:border-pink-600 px-3 py-2 text-pink-700 dark:text-pink-300 text-xs">
        Debug: If you see dashed pink border & color, Tailwind is active.
      </Text>
    </SafeAreaView>
  );
}
