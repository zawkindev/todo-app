/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable @typescript-eslint/no-unused-vars */

import {Text, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useState} from 'react';
import customColors from './Colors';

type TaskType = 'personal' | 'work' | 'erands';

interface taskProps {
  styles: {
    width: number;
    padding: number;
    marginVertical: number;
    borderRadius: number;
    backgroundColor: string;
    buttonColor: string;
    fontSize: number;
    color: string;
  };

  title: string;

  type: TaskType;
}

const Task: React.FC<taskProps> = ({styles, title, type}) => {
  const [isSelected, setSelected] = useState(false);
  const [taskType, setTaskType] = useState('No list');

  const taskTypeIndicator = {
    height: 15,
    width: 15,
    borderWidth: 3,
    borderRadius: 6,
    borderColor: customColors.taskType[type],
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(!isSelected);
      }}
      style={[
        styles,
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      ]}>
      <View style={{flexDirection: 'row'}}>
        <BouncyCheckbox
          size={25}
          innerIconStyle={{
            borderRadius: 10,
            borderWidth: 2,
            borderColor: isSelected
              ? customColors.taskType[type]
              : styles.buttonColor,
          }}
          fillColor={customColors.taskType[type]}
          isChecked={isSelected}
          disableBuiltInState
          unfillColor={styles.buttonColor}
          onPress={() => {
            setSelected(!isSelected);
          }}
        />
        <Text
          style={{
            fontSize: styles.fontSize,
            color: styles.color,
            textDecorationLine: isSelected ? 'line-through' : 'none',
          }}>
          {title}
        </Text>
      </View>
      <View style={taskTypeIndicator} />
    </TouchableOpacity>
  );
};

export default Task;
