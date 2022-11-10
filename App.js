import { Button, FlatList, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
	const [textItem, setTextItem] = useState('');
	const [itemList, setItemList] = useState([]);

	const [itemSelected, setItemSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(true);

	const onHandlerChangeItem = (item) => setTextItem(item);
	const addItem = () => {
		setItemList((currentItems) => [...currentItems, { id: Math.random().toString(), value: textItem }]);
		setTextItem('');
		console.log('lista: ', itemList);
	};
	const onHandlerDelete = (id) => {
		setItemList((currentItems) => currentItems.filter((item) => item.id !== id));
		setItemSelected({});
		setModalVisible(!modalVisible);
	};
	const onHandlerModal = (id) => {
		setItemSelected(itemList.filter((item) => item.id === id)[0]);
		setModalVisible(!modalVisible);
	};
	return (
		<View style={styles.container}>
			<ImageBackground source={require('./assets/HD-wallpaper-purple.jpg')} resizeMode="cover" style={styles.image}>
				<View style={styles.inputContainer}>
					<TextInput style={styles.input} onChangeText={onHandlerChangeItem} value={textItem} />
					<Button title="Agregar" color="#1466c3" onPress={addItem} />
				</View>
				<View style={styles.listContainer}>
					<Text style={styles.listTitle}>Todo List</Text>
					<FlatList
						data={itemList}
						renderItem={(data) => (
							<TouchableOpacity onPress={() => {}}>
								<View style={styles.listItemContainer}>
									<Text style={styles.listItem}>{data.item.value}</Text>
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
				<Modal animationType="fade" visible={modalVisible} style={styles.modalDelete}>
					<View style={styles.modalMessage}>
						<Text style={styles.modalMessageTextValue}>Está por borrar la tarea: {itemSelected.value} </Text>
					</View>
					<View style={styles.modalMessage}>
						<Text style={styles.modalMessageTextQuestion}>¿Está seguro que desea borrar?</Text>
					</View>
					<View style={styles.modalButtonContainer}>
						<Button title="Confirmar" color="#1466c3" onPress={addItem} style={styles.modalButton} />
						<Button title="Cancelar" color="#D34A29" onPress={addItem} style={styles.modalButton} />
					</View>
				</Modal>
			</ImageBackground>
		</View>
	);
}
