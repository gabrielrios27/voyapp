import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	listItemContainer: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
	},
	listItemTouchableOpacity: {
		marginVertical: 5,
		width: '80%',
		activeOpacity: 0.9,
	},
	listItem: {
		paddingVertical: 20,
		backgroundColor: '#d9d5d5',
		borderRadius: 5,
		justifyContent: 'center',
		fontSize: 14,
		color: '#014ba0',
		paddingHorizontal: 10,
		margin: 0,
	},
	listCheck: {
		backgroundColor: '#521CCD',
		padding: 15,
		borderRadius: 30,
		marginLeft: 15,
	},
	listCheckIco: { color: 'grey' },
});
