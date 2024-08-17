import { ScrollView, StyleSheet, Text, View, ImageBackground, } from "react-native";
import BossTable from "../../components/BossTable";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [bossCount, setBossCount] = useState(0);
  const [items, setItems] = useState([
    { label: "Limgrave", value: "Limgrave" },
    { label: "Weeping Peninsula", value: "Weeping" },
    { label: "Liurnia of the Lakes", value: "Liurnia" },
    { label: "Caelid", value: "Caelid" },
    { label: "Greyoll's Dragonbarrow", value: "Dragonbarrow" },
    { label: "Altus Plateau", value: "Altus" },
    { label: "Mt. Gelmir", value: "Gelmir" },
    { label: "Capital Outskirts", value: "Outskirts" },
    { label: "Leyndell, Royal Capital", value: "Royal" },
    { label: "Mountaintops of the Giants", value: "Giants" },
    { label: "Crumbling Farum Azula", value: "Azula" },
    { label: "Forbidden Lands", value: "Forbidden" },
    { label: "Consecrated Snowfield", value: "Consecrated" },
    { label: "Miquella's Haligtree", value: "Haligtree" },
    { label: "Siofra River", value: "Siofra" },
    { label: "Ainsel River", value: "Ainsel" },
    { label: "Lake of Rot", value: "Rot"},
    { label: "Nokron, Eternal City", value: "Nokron" },
    { label: "Deeproot Depths", value: "Deeproot" },
    { label: "Leyndell, Ashen Capital", value: "Ashen" },
    { label: "Gravesite Plain", value: "Gravesite" },
    { label: "Scadu Altus", value: "Scadu Altus" },
    { label: "Rauh Base", value: "Base" },
    { label: "Cerulean Coast", value: "Cerulean" },
    { label: "Charo's Hidden Grave", value: "Charo" },
    { label: "Jagged Peak", value: "Jagged" },
    { label: "Abyssal Woods", value: "Abyssal" },
    { label: "Scaduview", value: "Scaduview" },
    { label: "Ancient Ruins of Rauh", value: "Ancient Ruins" },
    { label: "Enir-Ilim", value: "Enir" },
  ]);

  useEffect(() => {
    setBossCount(bossCount);
  }, [bossCount])

  return (
    <ImageBackground source={require("../../assets/logo.png")}>
      <SafeAreaView>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="DARK"
        placeholder="Select a location"
        dropDownContainerStyle={{
          width: "91.667%",
          alignSelf: "center",
          marginTop: "5%",
        }}
        style={{
          width: "91.667%",
          alignSelf: "center",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      />

      <View className="self-center mb-3 w-[91.667%]">
        <View className="absolute inset-0 bg-black opacity-80 rounded-xl h-full w-full"></View>
        <Text className="items-center underline text-2xl font-bold text-center m-2 text-important">
          {bossCount}/207
        </Text>
      </View>

      <ScrollView className="w-11/12 self-center border-black rounded-xl mb-auto">
        <BossTable value={value} onBossCountChange={setBossCount}></BossTable>
      </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
