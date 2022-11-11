import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	inputContainer: {
		width: '100%',
		paddingVertical: 70,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input: {
		width: '70%',
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#014ba0',
		color: 'white',
	},
	inputAlert: {
		color: '#D34A29',
		position: 'absolute',
		bottom: 40,
		left: 20,
	},
});
