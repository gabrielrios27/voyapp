import { Button, TextInput, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const AddItem = ({ textItem, addItem, onHandlerChangeItem }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.input} value={textItem} onChangeText={onHandlerChangeItem} placeholder="Ingrese una tarea" />
			<Button title="Agregar" color="#1466c3" onPress={addItem} disabled={!textItem} />
		</View>
	);
};
export default AddItem;
