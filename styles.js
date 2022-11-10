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
		color: 'white',
	},
	inputAlert: {
		color: '#D34A29',
		position: 'absolute',
		bottom: 40,
		left: 20,
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
	listItemTouchableOpacity: {
		marginVertical: 5,
		color: 'white',
		activeOpacity: 0.9,
	},
	listItemContainer: {
		paddingVertical: 20,
		backgroundColor: '#d9d5d5',
		borderRadius: 5,
		justifyContent: 'center',
	},
	listItem: {
		fontSize: 14,
		color: '#014ba0',
		paddingHorizontal: 10,
		margin: 0,
	},
	modalContainer: {
		height: '100%',
		justifyContent: 'center',
	},
	modalDelete: {
		backgroundColor: '#f5f5f5',
		paddingTop: 20,
		paddingBottom: 30,
		paddingLeft: 20,
		paddingRight: 20,
		justifyContent: 'center',
		margin: 20,
	},
	modalMessage: {
		marginTop: 10,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalMessageTextValue: {
		fontSize: 16,
		color: '#014bb7',
	},
	modalMessageTextQuestion: {
		fontSize: 16,
		color: '#014bb7',
	},
	modalButtonContainer: {
		marginTop: 10,
		flexDirection: 'row-reverse',
		justifyContent: 'space-evenly',
	},
});
