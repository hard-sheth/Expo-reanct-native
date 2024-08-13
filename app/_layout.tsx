import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import { Stack } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View className="flex-1 bg-primary">
    
    <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="register" options={{ headerShown: false }} />
      {/* // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <SafeAreaView>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </SafeAreaView>
    // </ThemeProvider> */}
      {/* <AppText Textclass="text-xl font-bold"> Hello World! {colorScheme}</AppText> */}
      {/* <AppText Textclass="text-xl font-bold"> Hello World! </AppText> */}
      </Stack>
      {/* // </GlobalProvider> */}
     </View>
  );
}
