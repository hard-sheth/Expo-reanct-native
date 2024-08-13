import { View } from 'react-native'
import React from 'react'
import AppButton from '@/components/AppButton'
import AppText from '@/components/AppText'
import AppInput from '@/components/InputText'
import { Link } from 'expo-router'

const login = () => {
  return (
    <View className='bg-slate-900 flex-1'>
      <AppText Textclass='text-xl'>login</AppText>
      <AppInput InputType='secured' keyboardType='url' />
      <AppButton btnClass=''> Submit</AppButton>
      <AppText Textclass='text-center'>
        don't have an account? <AppText Textclass='text-base text-primary'>
          <Link href={'/register'}>
          Register Now
          </Link>
        </AppText>
      </AppText>
    </View>
  )
}

export default login