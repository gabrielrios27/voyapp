import { Button, Text, TextInput, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const AddItem = ({ textItem, addItem, onHandlerChangeItem }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.input} onChangeText={onHandlerChangeItem} value={textItem} />
			<Button title="Agregar" color="#1466c3" onPress={addItem} />
			{alertEmptyInput ? <Text style={styles.inputAlert}>Debe escribir una tarea</Text> : ''}
		</View>
	);
};
export default AddItem;
