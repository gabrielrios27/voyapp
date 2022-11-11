import { FlatList, Text, View } from 'react-native';

import { styles } from './styles';

const List = ({ itemList, renderItem }) => {
	return (
		<View style={styles.listContainer}>
			<Text style={styles.listTitle}>Todo List</Text>
			<FlatList data={itemList} renderItem={renderItem} keyExtractor={(item) => item.id} />
		</View>
	);
};

export default List;
