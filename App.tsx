import React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ResturentScreen } from './src/features/resturent/screens/resturents.screens';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/insfrastructure/theme';

import { useFonts as useOswald, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useLato, Oswald_400Regular } from '@expo-google-fonts/oswald';



export default function App() {

  const [latoLoaded] = useOswald({
    Lato_400Regular,
  });
  const [oswaldLoaded] = useLato({
    Oswald_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }



  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturentScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
