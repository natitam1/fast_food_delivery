import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white-100">
      <Text className="text-5xl text-center text-blue-500 font-quicksand-bold">
        Welcome to my React Native App!
      </Text>
    </View>
    // <SafeAreaView>
    //   <FlatList data={[]} renderItem={({ item }) => <div />} />
    // </SafeAreaView>
  );
}
