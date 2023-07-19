/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import customColors from './Colors';

type TaskType = 'personal' | 'work' | 'erands';

type tasksArrayProps = {
  id: string;
  title: string;
  type: TaskType;
};

interface TasksProps {
  colors: {
    backgroundColor: string;
    buttonColor: string;
    textColor: string;
  };
  tasks: {
    tasksList: Array<tasksArrayProps>;
    setTasksList: Function;
  };
  screenDimensions: {
    fontScale: number;
    height: number;
    scale: number;
    width: number;
  };
}



const Input = ({colors, tasks, screenDimensions}: TasksProps) => {
  const [title, setTitle] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Personal', value: 'personal'},
    {label: 'Work', value: 'work'},
    {label: 'Erands', value: 'erands'},
    {label: 'No list', value: 'no list'},
  ]);

  const onFocusutton = {
    height: 50,
    width: 80,
    backgroundColor: colors.backgroundColor,
  };
  const onBlurButton = {
    borderRadius: 50,
    paddingTop: 15,
    padding: 10,
    paddingHorizontal: 15,
    right: 0,
  };
  const onBlurInput = {
    backgroundColor: '#ededf0',
    width: screenDimensions.width - 210,
    height: 65,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  };

  const taskTypeIndicator = {
    height: 15,
    width: 15,
    borderWidth: 3,
    borderRadius: 6,
    borderColor: customColors.taskType[type],
  };
  return (
    <View
      style={[
        {
          bottom: 10,
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        inputFocused
          ? {width: screenDimensions.width - 20}
          : {width: screenDimensions.width - 90},
      ]}>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderRadius: 50,

            paddingVertical: 6,
          },
          inputFocused
            ? {
                width: screenDimensions.width - 20,
                borderRadius: 16,
                backgroundColor: '#fff ',
              }
            : onBlurInput,
        ]}>
        <TextInput
          onFocus={() => {
            setInputFocused(true);
          }}
          onBlur={() => {
            setInputFocused(false);
          }}
          showSoftInputOnFocus={true}
          cursorColor={'#000'}
          style={{
            backgroundColor: '#ededf0',
            fontSize: 18,
            marginHorizontal: 20,
            borderRadius: 50,
          }}
          onChangeText={value => {
            setTitle(value);
          }}
          placeholder="Write a new task"
          placeholderTextColor="#a0a1a9"
        />
      </View>
      {inputFocused ? (
        <TouchableOpacity
          style={{
            minWidth: 80,
            height: 40,
            backgroundColor: '#e4e4e4',
            position: 'absolute',
            right: 10,
            borderRadius: 10,
          }}>
          <View style={taskTypeIndicator} />
          <Text>sa</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            position: 'absolute',
            backgroundColor: '#ededf0',

            justifyContent: 'center',
            alignItems: 'center',

            borderWidth: 2,
            borderColor: '#fff',
            borderRadius: 50,
            paddingTop: 15,
            padding: 10,
            paddingHorizontal: 15,
            right: 0,
          }}>
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require('./images/image1.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
