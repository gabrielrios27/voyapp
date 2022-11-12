import { AddItem, Item, List, ModalDelete } from './components/index';
import { Button, FlatList, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
	const [textItem, setTextItem] = useState('');
	const [itemList, setItemList] = useState([]);

	const [itemSelected, setItemSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(false);

	const onHandlerChangeItem = (item) => setTextItem(item);
	const addItem = () => {
		setItemList((currentItems) => [...currentItems, { id: Math.random().toString(), value: textItem }]);
		setTextItem('');
	};
	const onHandlerDelete = (id) => {
		setItemList((currentItems) => currentItems.filter((item) => item.id !== id));
		setItemSelected({});
		setModalVisible(!modalVisible);
	};
	const onHandlerModal = (item) => {
		setItemSelected(item);
		setModalVisible(!modalVisible);
	};
	const onHandlerCancelModal = () => {
		setItemSelected({});
		setModalVisible(!modalVisible);
	};
	const renderItem = ({ item }) => <Item item={item} onHandlerModal={onHandlerModal} />;
	return (
		<View style={styles.container}>
			<ImageBackground source={require('./../assets/HD-wallpaper-purple.jpg')} resizeMode="cover" style={styles.image}>
				<AddItem textItem={textItem} addItem={addItem} onHandlerChangeItem={onHandlerChangeItem} />
				<List itemList={itemList} renderItem={renderItem} />
				<ModalDelete
					modalVisible={modalVisible}
					itemSelected={itemSelected}
					onHandlerDelete={onHandlerDelete}
					onHandlerCancelModal={onHandlerCancelModal}
				/>
			</ImageBackground>
		</View>
	);
}
