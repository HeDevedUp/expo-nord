import { useState, useRef, useContext, useEffect } from 'react';
import { StyleSheet, View, Platform, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import OnboardingNavigation from './appNavigation/OnboardingNavigation';
import AppNavigation from './appNavigation/BottomNavigation';
import BottomNavigation from './appNavigation/BottomNavigation';
import { onAuthStateChanged, User } from 'firebase/auth'
import { AuthUserContext } from './contexts/Context';
import { auth } from './config/firebase';






export default function Main() {

  const { user, setUser } = useContext(AuthUserContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      user ? setUser(user) : setUser(null)

      setLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  return loading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={'large'} />
    </View>
  ) : (
    <SafeAreaProvider>
      <NavigationContainer>

        {user ? <BottomNavigation /> : <OnboardingNavigation />}
        {/* <OnboardingNavigation /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
