import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TodoList from './components/TodoList';
import Form from './components/Form';

import { TodoService } from './services/TodoService';

export default class App extends React.Component{
    state = {
      list: []
    }
  
    async componentDidMount() {
      const list = await TodoService.list();
      this.setState({ list });
    }
  
  add = async (text) => {
    const newItem = await TodoService.create({ text });
    const list = [...this.state.list, newItem];
    this.setState({ list });
      
  }
  remove = async (item) => {
    await TodoService.remove(item.id);
    const list = this.state.list.filter(itemList => itemList.id !== item.id);
  }
  
  render(){
  const { state } = this;
  return (
    
    <View style={styles.container}>
      <Form onAdd={this.add} />
      <TodoList list={state.list} onRemove={this.remove}/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    width: 85,
    height: 60,
    marginTop: 30,
    backgroundColor: "#F18061",
    borderWidth: 3,
    borderColor: "#7B2B09",
    borderTopStartRadius: 40,
    borderTopEndRadius: 25,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 60,
    
  },
});
