import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './Week1Component/component/ToDoList';
import ToDoForm from './Week1Component/component/ToDoForm';


function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
