// src/screens/HomeScreen.js
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../redux/actions/todoActions';
import {RadioButton} from 'react-native-paper';

export default function HomeScreen() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState('first');

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        text: newTodo,
        done: false,
      }),
    );
    setNewTodo('');
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Keep Going</Text>
      </View>
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Add a new todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <RadioButton
              style={styles.itemText}
              value={item.text}
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    margin: 5,
    paddingVertical: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 22,
  },
  input: {
    margin: 4,
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
  titleContainer: {
    margin: 10,
  },
});
