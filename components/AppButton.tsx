import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonAppProp = {
    textClass?: string;
    btnClass?: string;
    onPress?: () => void;
    children: React.ReactNode;
}

const AppButton = ({ children, btnClass, onPress, textClass }: ButtonAppProp) => {
    return (
        <TouchableOpacity className={`${btnClass ? btnClass : ''} bg-success p-1 rounded ring ring-offset-2`} onPress={onPress}>
            <Text className={`${textClass ? textClass : ''} text-white text-center text-base bg-primary align-middle`}>{children}</Text>
        </TouchableOpacity>
    )
}

export default AppButton