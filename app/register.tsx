import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AppInput from '@/components/InputText'

const register = () => {
  return (
    <View className={` bg-primary flex-1`}>
      <SafeAreaView>
      <Text>register</Text>
      <AppInput InputType='secured' keyboardType='numeric' />

      <AppInput InputType='string' keyboardType='default' />
      </SafeAreaView>
    </View>
  )
}

export default register