import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, View, Text, Button, TextInput, Linking, Keyboard, ImageBackground, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ModalScreen() {

  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = () => {
    Linking.openURL(`mailto:j.business.r.1212@gmail.com?subject=Feedback&body=${comment}`)
  }

  return (
    <ImageBackground source={require("../assets/modal.png")} className='flex-1'>
    <SafeAreaView className="mt-5 w-[90%] self-center">
      <Text className="text-important text-3xl self-center underline">
        Submit Feedback
      </Text>
      <Text className="text-[#b4b2b0] text-xl self-center mt-3 mb-8">
        Any and all feedback is welcome!
      </Text>

      <Text className='font-bold text-xl text-important'>Email</Text>
      <TextInput
        className='h-12 border-2 rounded-lg pl-2 pr-2 mb-8 text-[#111827] bg-white'
        placeholder="Enter your email"
        placeholderTextColor="#7387a6"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text className='font-bold text-xl text-important'>Comments</Text>
      <TextInput
        className='h-56 border-2 rounded-lg pl-2 pr-2 align-text-top mb-8 text-[#111827] bg-white'
        placeholder="Leave your comments..."
        placeholderTextColor="#7387a6"
        value={comment}
        onChangeText={setComment}
        multiline={true}
        numberOfLines={10}
      />

      <Pressable 
        className='self-center rounded-md h-10 w-48'
        onPress={handleSubmit}
        disabled={email && comment ? false : true}
        style={{backgroundColor: email && comment ? "#AB966F" : "#473b23"}}
      >
        <Text className='self-center pt-2' style={{color: email && comment ? "black" : "white"}}>Submit</Text>
      </Pressable>
    </SafeAreaView>
    </ImageBackground>
  );
}