import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {check} from "../api/users";
import {setUser} from "../redux/data/actions";
import {store} from "../App";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {

    const getUser = async () => {
      try {
        const result = await AsyncStorage.getItem('@User')
        if(result !== null) {
          const res = await check(result);
          console.log(await res)
          await store.dispatch(setUser(res));
          setLoadingComplete(true);
        }
      } catch(e) {
        console.log(e)
      }
    }

    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    getUser()
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
