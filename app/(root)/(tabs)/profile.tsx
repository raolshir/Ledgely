// import React, { useCallback, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import { useFocusEffect, useRouter } from "expo-router";

// type UserProfile = {
//   id: string;
//   name: string;
//   email: string;
//   avatarUrl?: string;
//   createdAt?: string;
// };

// const mockFetchUser = async (): Promise<UserProfile> => {
//   // Replace with real API call
//   await new Promise((r) => setTimeout(r, 600));
//   return {
//     id: "u_123",
//     name: "Jane Doe",
//     email: "jane@example.com",
//     avatarUrl: undefined,
//     createdAt: new Date().toISOString(),
//   };
// };

// const mockSignOut = async () => {
//   await new Promise((r) => setTimeout(r, 400));
// };

// export default function ProfileScreen() {
//   const [user, setUser] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [signingOut, setSigningOut] = useState(false);
//   const router = useRouter();

//   const load = useCallback(async () => {
//     setLoading(true);
//     try {
//       const u = await mockFetchUser();
//       setUser(u);
//     } catch (e) {
//       Alert.alert("Error", "Failed to load profile");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useFocusEffect(
//     useCallback(() => {
//       load();
//     }, [load])
//   );

//   const handleEdit = () => {
//     router.push("/profile/edit"); // Create this route if needed
//   };

//   const handleSignOut = async () => {
//     if (signingOut) return;
//     try {
//       setSigningOut(true);
//       await mockSignOut();
//       // Navigate to an auth screen or reset state
//       router.replace("/auth/login");
//     } catch {
//       Alert.alert("Error", "Could not sign out");
//     } finally {
//       setSigningOut(false);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator />
//         <Text style={styles.loadingText}>Loading profile...</Text>
//       </View>
//     );
//   }

//   if (!user) {
//     return (
//       <View style={styles.center}>
//         <Text style={styles.error}>No user data</Text>
//         <TouchableOpacity style={styles.retryBtn} onPress={load}>
//           <Text style={styles.retryText}>Retry</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Image
//           source={
//             user.avatarUrl
//               ? { uri: user.avatarUrl }
//               : require("../../../assets/images/avatar-placeholder.png")
//           }
//           style={styles.avatar}
//         />
//         <Text style={styles.name}>{user.name}</Text>
//         <Text style={styles.email}>{user.email}</Text>
//         {user.createdAt && (
//           <Text style={styles.meta}>
//             Joined {new Date(user.createdAt).toLocaleDateString()}
//           </Text>
//         )}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Account</Text>
//         <TouchableOpacity style={styles.row} onPress={handleEdit}>
//           <Text style={styles.rowText}>Edit Profile</Text>
//           <Text style={styles.chevron}>›</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.row}
//           onPress={() => Alert.alert("Not implemented")}
//         >
//           <Text style={styles.rowText}>Security</Text>
//           <Text style={styles.chevron}>›</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>App</Text>
//         <TouchableOpacity
//           style={styles.row}
//           onPress={() => Alert.alert("Not implemented")}
//         >
//           <Text style={styles.rowText}>Notifications</Text>
//           <Text style={styles.chevron}>›</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.row}
//           onPress={() => Alert.alert("Not implemented")}
//         >
//           <Text style={styles.rowText}>Appearance</Text>
//           <Text style={styles.chevron}>›</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity
//         style={[styles.signOutBtn, signingOut && { opacity: 0.6 }]}
//         onPress={handleSignOut}
//         disabled={signingOut}
//       >
//         {signingOut ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.signOutText}>Sign Out</Text>
//         )}
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 32,
//     backgroundColor: "#0F1115",
//   },
//   loadingText: {
//     marginTop: 12,
//     color: "#A0A6AE",
//     fontSize: 14,
//   },
//   error: {
//     color: "#FF6B6B",
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   retryBtn: {
//     backgroundColor: "#1E2530",
//     paddingHorizontal: 18,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   retryText: {
//     color: "#fff",
//     fontSize: 14,
//   },
//   container: {
//     padding: 20,
//     paddingBottom: 60,
//     backgroundColor: "#0F1115",
//   },
//   header: {
//     alignItems: "center",
//     marginBottom: 32,
//   },
//   avatar: {
//     width: 92,
//     height: 92,
//     borderRadius: 46,
//     backgroundColor: "#1E2530",
//     marginBottom: 16,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: "600",
//     color: "#FFFFFF",
//   },
//   email: {
//     fontSize: 14,
//     color: "#A0A6AE",
//     marginTop: 4,
//   },
//   meta: {
//     fontSize: 12,
//     color: "#6B737C",
//     marginTop: 8,
//   },
//   section: {
//     marginBottom: 28,
//     backgroundColor: "#181C23",
//     borderRadius: 14,
//     overflow: "hidden",
//   },
//   sectionTitle: {
//     fontSize: 13,
//     fontWeight: "600",
//     letterSpacing: 0.5,
//     color: "#6B737C",
//     paddingHorizontal: 16,
//     paddingTop: 14,
//     paddingBottom: 6,
//     textTransform: "uppercase",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     borderTopWidth: StyleSheet.hairlineWidth,
//     borderTopColor: "#232A33",
//   },
//   rowText: {
//     flex: 1,
//     color: "#E4E7EB",
//     fontSize: 15,
//   },
//   chevron: {
//     color: "#6B737C",
//     fontSize: 20,
//     marginLeft: 8,
//   },
//   signOutBtn: {
//     backgroundColor: "#D63C3C",
//     paddingVertical: 14,
//     alignItems: "center",
//     borderRadius: 10,
//     marginTop: 8,
//   },
//   signOutText: {
//     color: "#fff",
//     fontSize: 15,
//     fontWeight: "500",
//   },
// });
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-JakartaBold">Profile Screen</Text>
    </View>
  );
}
