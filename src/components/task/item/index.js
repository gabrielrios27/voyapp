import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const Item = ({ onHandlerModal, item }) => {
	return (
		<TouchableOpacity activeOpacity={0.5} style={styles.listItemTouchableOpacity} onPress={() => onHandlerModal(item)}>
			<View style={styles.listItemContainer}>
				<Text style={styles.listItem}>{item.value}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Item;
