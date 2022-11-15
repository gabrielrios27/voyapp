import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { useState } from 'react';

const Item = ({ onHandlerModal, item, onHandlerDoneItem }) => {
	const [doneTask, setDoneTask] = useState(false);

	return (
		<View style={styles.listItemContainer}>
			<TouchableOpacity activeOpacity={0.5} style={styles.listItemTouchableOpacity} onPress={() => onHandlerModal(item)}>
				<Text style={styles.listItem}>{item.value}</Text>
			</TouchableOpacity>

			<TouchableHighlight
				style={[styles.listCheck, item.done ? styles.listCheckDone : styles.listCheckUndone]}
				activeOpacity={0.6}
				underlayColor="#f0bb0f"
				onPress={() => onHandlerDoneItem(item)}
			>
				<Image
					style={styles.listCheckIco}
					source={item.done ? require('../../../../assets/icons/check.png') : require('../../../../assets/icons/exclamationMark.png')}
				/>
			</TouchableHighlight>
		</View>
	);
};

export default Item;
