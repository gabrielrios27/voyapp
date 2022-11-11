import { Button, FlatList, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import AddItem from './components/index';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles';
import { useState } from 'react';

export default function App() {
	const [textItem, setTextItem] = useState('');
	const [itemList, setItemList] = useState([]);

	const [itemSelected, setItemSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(false);
	const [alertEmptyInput, setAlertEmptyInput] = useState(false);

	const onHandlerChangeItem = (item) => {
		if (alertEmptyInput) {
			setAlertEmptyInput(false);
		}
		setTextItem(item);
	};
	const addItem = () => {
		if (textItem === '') {
			setAlertEmptyInput(true);
		} else {
			setItemList((currentItems) => [...currentItems, { id: Math.random().toString(), value: textItem }]);
			setTextItem('');
		}
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
	const onHandlerCancelModal = () => {
		setItemSelected({});
		setModalVisible(!modalVisible);
	};
	return (
		<View style={styles.container}>
			<ImageBackground source={require('./../assets/HD-wallpaper-purple.jpg')} resizeMode="cover" style={styles.image}>
				<AddItem textItem={textItem} addItem={addItem} onHandlerChangeItem={onHandlerChangeItem} />
				<View style={styles.listContainer}>
					<Text style={styles.listTitle}>Todo List</Text>
					<FlatList
						data={itemList}
						renderItem={(data) => (
							<TouchableOpacity activeOpacity={0.5} style={styles.listItemTouchableOpacity} onPress={onHandlerModal.bind(this, data.item.id)}>
								<View style={styles.listItemContainer}>
									<Text style={styles.listItem}>{data.item.value}</Text>
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
				<Modal animationType="fade" visible={modalVisible} transparent={true}>
					<View style={styles.modalContainer}>
						<View style={styles.modalDelete}>
							<View style={styles.modalMessage}>
								<Text style={styles.modalMessageTextValue}>Está por borrar la tarea: {itemSelected.value} </Text>
							</View>
							<View style={styles.modalMessage}>
								<Text style={styles.modalMessageTextQuestion}>¿Está seguro que desea borrar?</Text>
							</View>
							<View style={styles.modalButtonContainer}>
								<Button title="Confirmar" color="#1466c3" onPress={onHandlerDelete.bind(this, itemSelected.id)} style={styles.modalButton} />
								<Button title="Cancelar" color="#D34A29" onPress={onHandlerCancelModal} style={styles.modalButton} />
							</View>
						</View>
					</View>
				</Modal>
			</ImageBackground>
		</View>
	);
}
