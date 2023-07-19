/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StatusBar,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import customColors from './src/Colors';
import Tasks from './src/Tasks';
import Input from './src/Input';

function App(): JSX.Element {
  type TaskType = 'personal' | 'work' | 'erands';

  const [tasksList, setTasksList] = useState([
    {
      id: Date.now().toString(),
      title: 'Reading Harry Potter 7',
      type: 'personal' as TaskType,
    },
    {
      id: '5675865',
      title: 'Watching Naruto',
      type: 'erands' as TaskType,
    },
    {
      id: '567586445',
      title: 'Creating RestFul API',
      type: 'work' as TaskType,
    },
    {
      id: '123456789',
      title: 'Cooking dinner',
      type: 'personal' as TaskType,
    },
    {
      id: '987654321',
      title: 'Writing report',
      type: 'work' as TaskType,
    },
    {
      id: '555555555',
      title: 'Going for a run',
      type: 'personal' as TaskType,
    },
    {
      id: '444444444',
      title: 'Grocery shopping',
      type: 'erands' as TaskType,
    },
    {
      id: '666666666',
      title: 'Attending meeting',
      type: 'work' as TaskType,
    },
    {
      id: '777777777',
      title: 'Reading a book',
      type: 'personal' as TaskType,
    },
    {
      id: '888888888',
      title: 'Cleaning the house',
      type: 'erands' as TaskType,
    },
    {
      id: '999999999',
      title: 'Preparing presentation',
      type: 'work' as TaskType,
    },
    {
      id: '111111111',
      title: 'Walking the dog',
      type: 'personal' as TaskType,
    },
  ]);

  const screenDimensions = useWindowDimensions();

  const isDarkMode = useColorScheme() === 'dark';

  function getColors(list: Array<string>): {
    backgroundColor: string;
    buttonColor: string;
    textColor: string;
  } {
    return {backgroundColor: list[0], buttonColor: list[1], textColor: list[2]};
  }

  const {backgroundColor, buttonColor, textColor} = isDarkMode
    ? getColors(customColors.darkMode)
    : getColors(customColors.liteMode);

  SystemNavigationBar.setNavigationColor(backgroundColor);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: backgroundColor,
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={backgroundColor} />

      <Tasks
        colors={{backgroundColor, buttonColor, textColor}}
        tasks={{tasksList, setTasksList}}
        screenDimensions={screenDimensions}
      />
      <Input
        colors={{backgroundColor, buttonColor, textColor}}
        tasks={{tasksList, setTasksList}}
        screenDimensions={screenDimensions}
      />
    </View>
  );
}

export default App;
