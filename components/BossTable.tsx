import React, { useEffect, useState } from "react";
import { Boss } from "../models/Bosses";
import { Pressable, ScrollView, View, Text } from "react-native";
import BossItem from "./BossItem";
import { bosses } from "../constants/BossInfo";
import { SaveData, LoadData } from "../services/storage";

interface Props {
  value: any;
}

const BossTable: React.FC<Props> = ({ value }) => {
  const [bossList, setBossList] = useState<Record<string, Boss> | null>(null);
  const [updatedItem, setUpdatedItem] = useState(false);
  const [bossCount, setBossCount] = useState(0);

  useEffect(() => {
    const loadBossList = async () => {
      const savedBosses = await LoadData<Record<string, Boss>>("Boss Data");
      if (savedBosses) {
        setBossList(savedBosses);
        const bossArray = Object.entries(savedBosses);
        setBossCount(bossArray.filter(x => x[1].completed).length)
      } else {
        setBossList(bosses);
      }
    };
    loadBossList();
  }, []);

  useEffect(() => {
    if (bossList !== null) {
      const bossArray = Object.entries(bossList);

      bossArray.sort(([, a], [, b]) => {
        // First, sort by location based on the provided value
        const aLocationIncludesValue = value
          ? a.location.includes(value)
          : false;
        const bLocationIncludesValue = value
          ? b.location.includes(value)
          : false;

        if (aLocationIncludesValue && !bLocationIncludesValue) {
          return -1;
        } else if (!aLocationIncludesValue && bLocationIncludesValue) {
          return 1;
        }

        // If both or neither include the location value, sort by location alphabetically
        const locationCompare = a.location.localeCompare(b.location);

        if (locationCompare !== 0) {
          if (a.completed && !b.completed) {
            return 1;
          } else if (!a.completed && b.completed) {
            return -1;
          }
        }

        // If locations are the same, sort by completion status (move completed to bottom)
        if (a.completed && !b.completed) {
          return 1;
        } else if (!a.completed && b.completed) {
          return -1;
        }

        // If both are completed or both are not completed, keep their order
        return 0;
      });

      const sortedBosses = Object.fromEntries(bossArray);

      setBossList(sortedBosses);
      SaveData("Boss Data", bossList);
      setBossCount(bossArray.filter(x => x[1].completed).length)
    }
  }, [value, bosses, updatedItem]);

  const onBossValueChange = (changedBoss: Boss) => {
    setBossList((bossList) => {
      if (bossList) {
        const bossArray = Object.entries(bossList);

        let index = bossArray.find(
          ([, boss]) => boss.id == changedBoss.id
        )?.[0];

        if (index) bossList[index].completed = changedBoss.completed;
        
        return bossList;
      }
      return bossList;
    });
    setUpdatedItem(!updatedItem);
  };

  return (
    <View>
        <View>
          <View className='absolute inset-0 bg-black opacity-80 rounded-xl w-full h-full'>
          </View>
          <Text className='items-center underline text-2xl font-bold text-center m-2 text-important'>
            {bossCount}/165
          </Text>
        </View>
        {bossList &&
          Object.values(bossList).map((boss, index) => (
            <BossItem
              key={boss.id}
              boss={boss}
              onBossValueChange={onBossValueChange}
            ></BossItem>
          ))}
    </View>
  );
};

export default BossTable;
