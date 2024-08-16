import { ImageBackground, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  //Re-usable styles
  const importantInfo = "items-center underline text-important text-2xl font-bold text-center m-2";
  const leastImportant = "text-sm text-center text-[#b4b2b0] mt-3 mb-3";
  const backgroundWrapper = 'absolute inset-0 bg-black opacity-80 rounded-xl w-full h-full';

  return (
    <ImageBackground source={require("../../assets/logo.png")}>
      <ScrollView className="self-center p-3">
        <View className={backgroundWrapper} />
        <View className="p-5">
          <Text className={importantInfo}>Elden Ring Boss Checklist</Text>
          <Text className={leastImportant}>
            This is a basic checklist for the "true bosses" of Elden Ring. A
            true Boss is a boss with a dedicated health bar on the bottom of the
            screen, there are 165.
          </Text>
          <Text className={importantInfo}>General Information</Text>
          <Text className={leastImportant}>
            1. All info was gotten by hand via Elden Ring wiki, if anything is
            wrong I will eventually add a way to contact me and give feedback.
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
            6. Lastly, thank you for using this app, it is my first released
            product so there most likely will be issues, please leave feedback
            as anything is appreciated.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
