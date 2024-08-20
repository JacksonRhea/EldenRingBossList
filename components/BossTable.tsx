import React, { useEffect, useState } from "react";
import { Boss } from "../models/Bosses";
import { Pressable, ScrollView, View, Text } from "react-native";
import BossItem from "./BossItem";
import { bosses } from "../constants/BossInfo";
import { SaveData, LoadData } from "../services/storage";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  value: any;
  bossList: Record<string, Boss> | null
  filterCompleted: boolean
  onBossCountChange: (count: number) => void
}

const BossTable: React.FC<Props> = ({ value, bossList, filterCompleted, onBossCountChange }) => {
  const [clonedBossList, setClonedBossList] = useState<Record<string, Boss> | null>(bossList);
  const [updatedItem, setUpdatedItem] = useState(false);

  useEffect(() => {
    if (clonedBossList !== null) {
      const bossArray = Object.entries(clonedBossList);
      
      {!filterCompleted ? 
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
        }) : 

        bossArray.sort(([, a], [, b]) => {
          //Sort by completed
          if (a.completed && !b.completed) {
            return -1
          } else if (!a.completed && b.completed) {
            return 1;
          }

          return 0;
         
        });
      }

      const sortedBosses = Object.fromEntries(bossArray);

      setClonedBossList(sortedBosses);
      SaveData("Boss Data", clonedBossList);
    }
  }, [value, bosses, updatedItem, filterCompleted]);

  const onBossValueChange = (changedBoss: Boss) => {
    setClonedBossList((clonedBossList) => {
      if (clonedBossList) {
        const bossArray = Object.entries(clonedBossList);

        let index = bossArray.find(
          ([, boss]) => boss.id == changedBoss.id
        )?.[0];

        if (index) clonedBossList[index].completed = changedBoss.completed;

        onBossCountChange(bossArray.filter(x => x[1].completed).length)
        
        return clonedBossList;
      }
      return clonedBossList;
    });
    setUpdatedItem(!updatedItem);
  };

  return (
    <View>
        {clonedBossList &&
          Object.values(clonedBossList).map((boss, index) => (
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
