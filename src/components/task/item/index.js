import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const Item = ({ onHandlerModal, item }) => {
	return (
		<View style={styles.listItemContainer}>
			<TouchableOpacity activeOpacity={0.5} style={styles.listItemTouchableOpacity} onPress={() => onHandlerModal(item)}>
				<Text style={styles.listItem}>{item.value}</Text>
			</TouchableOpacity>
			<TouchableHighlight style={styles.listCheck} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => console.warn('Pressed!')}>
				<Text style={styles.listCheckIco}>Ok</Text>
			</TouchableHighlight>
		</View>
	);
};

export default Item;
