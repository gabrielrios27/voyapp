import { Button, FlatList, Text, View } from 'react-native';

import { styles } from './styles';
import { useState } from 'react';

const List = ({ itemList, renderItem }) => {
	const [tabSelected, setTabSelected] = useState('Todos');

	const onHandlerTabBtn = (select) => {
		if (select === 'Todos') {
			return itemList;
		} else if (select === 'Terminados') {
			return itemList.filter((item) => item.done === true);
		} else {
			return itemList.filter((item) => item.done === false);
		}
	};
	return (
		<View style={styles.listContainer}>
			<View style={styles.listTabContainer}>
				<Text style={styles.listTitle}>Tareas</Text>
				<View style={styles.listBtnContainer}>
					<View style={styles.listBtnTab}>
						<Button
							title={'Todos'}
							color={tabSelected === 'Todos' ? '#f0bb0f' : '#363438'}
							style={styles.listBtn}
							onPress={() => setTabSelected('Todos')}
						></Button>
					</View>
					<View style={styles.listBtnTab}>
						<Button
							title={'Terminados'}
							color={tabSelected === 'Terminados' ? '#f0bb0f' : '#363438'}
							onPress={() => setTabSelected('Terminados')}
						></Button>
					</View>
					<View style={styles.listBtnTab}>
						<Button
							title={'Pendientes'}
							color={tabSelected === 'Pendientes' ? '#f0bb0f' : '#363438'}
							onPress={() => setTabSelected('Pendientes')}
						></Button>
					</View>
				</View>
			</View>
			<FlatList data={onHandlerTabBtn(tabSelected)} renderItem={renderItem} keyExtractor={(item) => item.id} />
		</View>
	);
};

export default List;
