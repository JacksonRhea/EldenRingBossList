import React, { useEffect } from "react";
import { Image, Pressable, SafeAreaView, View } from "react-native";
import { Text } from "react-native";
import { useState } from "react";
import { Boss } from "../models/Bosses";
import { bosses } from "../constants/BossInfo";
import { ImageMap } from "../constants/ImageMapping";
import { LocationMap } from "../constants/LocationImageMapping";
import CheckBox from 'expo-checkbox';

interface Props {
    boss: Boss
    onBossValueChange: (boss: Boss) => void
}

const BossItem: React.FC<Props> = ({ boss, onBossValueChange }) => {
  //Re-used styles
  const bossItem = 'w-full p-3 items-center my-3 mb-3 h-auto rounded-xl flex-1 relative'
  const backgroundWrapper = 'absolute inset-0 bg-black opacity-80 rounded-xl w-full h-full'
  const importantInfo = 'items-center underline text-important text-2xl font-bold text-center m-2'
  const mediumImportance = 'text-base font-bold underline text-important'
  const leastImportant = 'text-sm text-[#b4b2b0]'
  const bossImage = 'w-10/12 h-48 object-fill items-center mb-2 self-center rounded-xl mb-5'
  const iconContainer = 'flex-row justify-between w-9/12 items-center self-center mb-5 mt-3'


  const [moreInfo, setMoreInfo] = useState<boolean>(boss.completed);
  const [complete, setComplete] = useState<boolean>(boss.completed);

  const imageSource = ImageMap[boss.image]
  const locationSource = LocationMap[boss.mapLink]

  const HandleComplete = () => {
    setComplete(!complete)
    boss.completed = !complete
    onBossValueChange(boss)
  }

  const HandleMoreInfo = () => {
    setMoreInfo(!moreInfo)
  }

  return (
    <SafeAreaView className={bossItem}>
      <View className={backgroundWrapper}>
      </View>
        <Text className={importantInfo}>
          {boss.name}
          </Text>
        <View className='flex-row justify-between w-5/6 mb-10'>
          <View className='flex-row items-center'>
            <Text className={mediumImportance}>
              Health: 
            </Text>
            <Text className={leastImportant}>
              {boss.healthPoints ? boss.healthPoints : 0}
            </Text>
          </View>
          <View className='flex-row items-center'>
            <Text className={mediumImportance}>Runes: </Text>
            <Text className={leastImportant}>
              {boss.runeRewards ? boss.runeRewards : 0}
            </Text>
          </View>
        </View>
        {imageSource && <Image source={imageSource} className={bossImage} />}
        <View>
          <Text className={importantInfo}>
            {boss.location}
          </Text>
          <View className={iconContainer}>
            <Pressable onPress={HandleMoreInfo}>
              <Image 
                className='h-16 w-16 rounded-xl'
                source={(require("../assets/map.png"))} 
              />
            </Pressable>
            <CheckBox 
              value={complete}
              onValueChange={HandleComplete}
              color={complete ? 'green' : ''}
              className='w-16 h-16 rounded-xl border-[#AB966F]'
            />
          </View>
        </View>
        {moreInfo && (
          <View className='flex-1 mr-auto ml-auto w-11/12'>
            <Text className={importantInfo}>
              Description
            </Text>
            <Text className='mb-3 text-[#b4b2b0]'>{boss.description}</Text>
            <Text className={importantInfo}>
              Map 
            </Text>
            {locationSource && <Image source={locationSource} className={bossImage} />}
          </View>
        )}
    </SafeAreaView>
  );
};

export default BossItem;
