import React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ResturentScreen } from './src/features/resturent/screens/resturents.screens';

export default function App() {

  return (
    <>
      <ResturentScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
