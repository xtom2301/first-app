import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        placeholder='Add Item...'
        style={styles.input}
        onChangeText={(e) => setText(e)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <AntDesign name='pluscircleo' size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AddItem;
