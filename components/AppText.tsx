import { Text, useColorScheme } from 'react-native'
import React from 'react'

interface TextProps{
    children: React.ReactNode;
    Textclass?: string
}

const AppText = ({children,Textclass}:TextProps) => {
    const colorScheme = useColorScheme();
    
  return (
      <Text className= {`${colorScheme === 'light'? 'text-white' : ''} ${Textclass ? Textclass : ""}`}>{children}</Text>
  )
}

export default AppText