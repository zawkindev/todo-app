/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import customColors from './Colors';

type TaskType = 'personal' | 'work' | 'erands';

const taskTypeIndicator = {
    height: 15,
    width: 15,
    borderWidth: 3,
    borderRadius: 6,
    borderColor: customColors.taskType[type] as TaskType,
  }; 

const TaskTypeIndicator = () => {
  return (
    <View style={taskTypeIndicator} />
  );
};

export default TaskTypeIndicator;

const styles = StyleSheet.create({});
