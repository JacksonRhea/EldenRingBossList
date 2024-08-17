import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  //Re-usable styles
  const importantInfo = "items-center underline text-important text-2xl font-bold text-center m-2";
  const leastImportant = "text-sm text-center text-[#b4b2b0] mt-3 mb-3";
  const backgroundWrapper = 'absolute inset-0 bg-black opacity-80 rounded-xl w-full h-full';

  return (
    <ImageBackground source={require("../../assets/logo.png")}>
      <SafeAreaView>
      <ScrollView className="self-center ml-3 mr-3 border-black rounded-xl">
        <View className={backgroundWrapper} />
        <View className="p-3">
          <Text className={importantInfo}>Elden Ring Boss Checklist</Text>
          <Text className={leastImportant}>
            This is a basic checklist for the "true bosses" of Elden Ring. A
            true Boss is a boss with a dedicated health bar on the bottom of the
            screen, there are 165 base game, 207 with the dlc included.
          </Text>
          <Text className={importantInfo}>General Information</Text>
          <Text className={leastImportant}>
            1. All info was gotten by hand via Elden Ring wiki, if anything is
            wrong please let me know via the "i" in the top right of this page to leave a comment.
            {"\n"}
            {"\n"}
            2. Clicking the map icon on the left opens up a more detailed
            description and a picture of the approximate location of the boss.
            {"\n"}
            {"\n"}
            3. Clicking the right icon marks the boss as completed, doing this
            moves the boss to the bottom of the list, if a location was
            filtered, the boss moves to the bottom of the filtered location.
            {"\n"}
            {"\n"}
            4. I may update this to include items, graces, etc. not entirely
            sure though, as this took long enough as is.{"\n"}
            {"\n"}
            5. Huge thank you to Elden Ring Wiki for providing the info for
            this, all credits goes to them for this information.{"\n"}
            {"\n"}
            6. Lastly, this was not made with beginners in mind, so if you haven't played Elden Ring
            before this probably won't be that helpful.
          </Text>
        </View>
      </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
