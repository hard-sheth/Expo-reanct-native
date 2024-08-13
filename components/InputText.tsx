import { useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text } from 'react-native';

interface TextProps{
    Textclass?: string;
    InputType: 'string'|'number'|'secured';
    maxLength?: number;
    keyboardType?: 'numeric'|'default';
}

const AppInput = ({Textclass, InputType='string', maxLength, keyboardType='default'}:TextProps) => {
    const colorScheme = useColorScheme();
    const [inputVal, setInputVal]= useState('');
    if(InputType === 'string'){
  return (
      <TextInput  className= {`border py-1 px-2 border-secondary rounded mb-2 ${colorScheme === 'light'? 'text-white' : ''} ${Textclass ? Textclass : ""}`} secureTextEntry={false} 
      maxLength={maxLength}
      value={inputVal} onChangeText={(text)=>{
        setInputVal(text)
    }}
     />
  )
}
else if(InputType === 'number'){
  return (
      <TextInput  className= {`border py-1 px-2 border-secondary rounded mb-2 ${colorScheme === 'light'? 'text-white' : ''} ${Textclass ? Textclass : ""}`} secureTextEntry={false} value={inputVal} onChangeText={(text)=>{
        setInputVal(text)
    }}
    maxLength={maxLength}
    keyboardType='numeric'
    />
  )
}
else if(InputType === 'secured'){
  return (
      <TextInput  className= {`border py-1 px-2 border-secondary rounded mb-2 ${colorScheme === 'light'? 'text-white' : ''} ${Textclass ? Textclass : ""}`} secureTextEntry={true} value={inputVal} onChangeText={(text)=>{
        setInputVal(text)
    }} 
    maxLength={maxLength}
    keyboardType={keyboardType}
    />
  )
}
}

export default AppInput