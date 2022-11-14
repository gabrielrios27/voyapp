import { Button, Modal, Text, View } from 'react-native';

import { styles } from './styles';

const ModalDelete = ({ modalVisible, itemSelected, onHandlerDelete, onHandlerCancelModal }) => {
	return (
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
						<Button title="Confirmar" color="#003ce5" onPress={() => onHandlerDelete(itemSelected.id)} style={styles.modalButton} />
						<Button title="Cancelar" color="#D34A29" onPress={onHandlerCancelModal} style={styles.modalButton} />
					</View>
				</View>
			</View>
		</Modal>
	);
};
export default ModalDelete;
