/* eslint-disable prettier/prettier */

import {ScrollView, View, ViewStyle} from 'react-native';
import React from 'react';
import Task from './Task';

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

const Tasks = ({colors, tasks, screenDimensions}: TasksProps) => {
  const taskStyles = {
    width: screenDimensions.width - 65,
    padding: 20,
    marginVertical: 6,
    borderRadius: 25,
    backgroundColor: colors.buttonColor,
    buttonColor: colors.backgroundColor,
    fontSize: 20,
    color: colors.textColor,
  };

  const containerStyle: ViewStyle = {
    flex: 1,
    width: screenDimensions.width,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    minHeight: screenDimensions.height,
    paddingVertical: 20,
    paddingBottom: 10,
    marginBottom:90,
  };

  return (
    <ScrollView>
      <View style={containerStyle}>
        {tasks.tasksList.map(task => {
          return (
            <Task
              key={task.id}
              styles={taskStyles}
              title={task.title}
              type={task.type}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Tasks;
