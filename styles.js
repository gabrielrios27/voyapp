import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputContainer: {
		width: '100%',
		paddingVertical: 70,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	image: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
	},
	input: {
		width: '70%',
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#014ba0',
	},

	listContainer: {
		marginHorizontal: 20,
	},
	listTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#d9d5d5',
	},
	listItemContainer: {
		paddingVertical: 20,
		backgroundColor: '#d9d5d5',
		borderRadius: 5,
		shadowColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		justifyContent: 'center',
		marginVertical: 5,
	},
	listItem: {
		fontSize: 14,
		color: '#014ba0',
		paddingHorizontal: 10,
	},
});
