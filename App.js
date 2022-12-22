import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task.js';
import React, {useState} from 'react';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <><View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>To Do List</Text>

      <View style={styles.items}>
        {taskItems.map((item, index) => {
          return(
            <>
            <TouchableOpacity key = {index} onPress={() => completeTask()}>
              <Task text={item}></Task>
            </TouchableOpacity>
            
            </>
            ) ;
        })}


      </View>



    </View>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} onChangeText={text => setTask(text)} value={task}></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    justifyContent: "center"
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: 'gray'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "gray",
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1
  },
  addText: {

  }
});
