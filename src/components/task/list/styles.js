import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	listContainer: {
		marginHorizontal: 20,
	},
	listTabContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
	listTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#d9d5d5',
	},
	listBtnContainer: { flexDirection: 'row' },
	listBtnTab: {
		marginRight: 5,
	},
});
