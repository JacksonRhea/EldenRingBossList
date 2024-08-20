import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  Pressable,
} from "react-native";
import BossTable from "../../components/BossTable";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Boss } from "@/models/Bosses";
import { LoadData } from "@/services/storage";

export default function ListScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [bossCount, setBossCount] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const [bossList, setBossList] = useState<Record<string, Boss> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filterCompleted, setFilterCompleted] = useState(false);
  const [items, setItems] = useState([
    { label: "Limgrave", value: "Limgrave" },
    { label: "Weeping Peninsula", value: "Weeping" },
    { label: "Liurnia of the Lakes", value: "Liurnia" },
    { label: "Caelid", value: "Caelid" },
    { label: "Greyoll's Dragonbarrow", value: "Dragonbarrow" },
    { label: "Altus Plateau", value: "Plateau" },
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
    { label: "Lake of Rot", value: "Rot" },
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
  }, [bossCount]);

  useEffect(() => {
    setFilterCompleted(filterCompleted)
    console.log(filterCompleted)
  }, [filterCompleted]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 0,
      });
    }
  }, [value]);

  useEffect(() => {
    const loadBossList = async () => {
      const savedBosses = await LoadData<Record<string, Boss>>("Boss Data");
      if (savedBosses) {
        setBossList(savedBosses);
        const bossArray = Object.entries(savedBosses);
        setBossCount(bossArray.filter((x) => x[1].completed).length);
        setIsLoading(false);
      } else {
        setBossList(null);
      }
    };
    loadBossList();
  }, []);

  const updateFilters = (value: any) => {
    setValue(value)
    setFilterCompleted(false)
  }

  return (
    <>
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-3xl text-important mb-5">
            Loading Bosses...
          </Text>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <ImageBackground source={require("../../assets/logo.jpg")}>
          <SafeAreaView>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={updateFilters}
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

            <Pressable onPress={() => setFilterCompleted(true)}>
              <View className="self-center mb-3 w-[91.667%]">
                <View className="absolute inset-0 bg-black opacity-80 rounded-xl h-full w-full"></View>
                <Text className="items-center underline text-2xl font-bold text-center m-2 text-important">
                  {bossCount}/207
                </Text>
              </View>
            </Pressable>

            <ScrollView
              ref={scrollViewRef}
              className="w-11/12 self-center border-black rounded-xl mb-auto"
            >
              <BossTable value={value} bossList={bossList} filterCompleted={filterCompleted} onBossCountChange={setBossCount}></BossTable>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      )}
    </>
  );
}
