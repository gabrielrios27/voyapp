import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
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
