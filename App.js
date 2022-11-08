import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('./assets/HD-wallpaper-purple.jpg')}
				resizeMode="cover"
				style={styles.image}
			>
				<View style={styles.inputContainer}>
					<TextInput style={styles.input} />
					<Button title="Agregar" color="#1466c3" onPress={() => null} />
				</View>
				<View style={styles.listContainer}>
					<Text style={styles.listTitle}>Todo List</Text>
					<View style={styles.listItemContainer}>
						<Text style={styles.listItem}>Todo Item</Text>
					</View>
					<View style={styles.listItemContainer}>
						<Text style={styles.listItem}>Todo Item</Text>
					</View>
					<View style={styles.listItemContainer}>
						<Text style={styles.listItem}>Todo Item</Text>
					</View>
					<View style={styles.listItemContainer}>
						<Text style={styles.listItem}>Todo Item</Text>
					</View>
					<View style={styles.listItemContainer}>
						<Text style={styles.listItem}>Todo Item</Text>
					</View>
					<View style={styles.listItemContainer}>
						<Text style={styles.listItem}>Todo Item</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}
