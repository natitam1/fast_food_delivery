import { appwriteConfig } from "@/lib/appwrite";
import seed from "@/lib/seed";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView>
      <Text>Search</Text>
      <Button
        title="Seed"
        onPress={() => {
          console.log("Appwrite endpoint:", appwriteConfig.endpoint);
          seed().catch((error) => console.log("Error", error));
        }}
      />
    </SafeAreaView>
  );
};

export default Search;
