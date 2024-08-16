import { ScrollView, StyleSheet, Text, View, ImageBackground, } from "react-native";
import BossTable from "../../components/BossTable";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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
  ]);

  return (
    <ImageBackground source={require("../../assets/logo.png")}>
      
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="DARK"
        dropDownContainerStyle={{width: "91.667%", alignSelf: 'center', marginTop: '15%'}}
        style={{width: "91.667%", alignSelf: 'center', marginTop: '15%'}}
      />
      <ScrollView className='w-11/12 self-center'>
        <BossTable value={value}></BossTable>
      </ScrollView>
    </ImageBackground>
  );
}
