import { FlatList, StyleSheet, View, Alert } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Milk' },
    { id: uuid.v4(), text: 'Eggs' },
    { id: uuid.v4(), text: 'Bread' },
    { id: uuid.v4(), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok' });
    } else {
      setItems((prevItems) => {
        return [{ id: uuid.v4(), text }, ...prevItems];
      });
    }
  };

  return (
    <View>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
