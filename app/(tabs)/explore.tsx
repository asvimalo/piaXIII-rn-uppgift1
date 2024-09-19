import FlatListView from '@/components/FlatListView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, View, Text, StyleSheet, Image, Platform } from 'react-native';



export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <Text style={styles.textProps}>Navigation</Text>
      </View>
      <View style={styles.rowTwo}>
        <View style={{backgroundColor: "white", flex:1, borderRadius: 10, borderWidth: 5, borderColor: "green"}}>
          <Text style={styles.textBox}>Movie</Text>
        </View>
        <View style={{ backgroundColor: "white",flex:1, borderRadius: 10, borderWidth: 5, borderColor: "yellow"}}>
        <Text style={styles.textBox}>Year</Text>
        </View>
      </View>
      <FlatListView/>
      <View style={styles.rowFour}></View>
      <View style={styles.rowFive}>
        <Text style={styles.textProps}>ORANGE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: "cyan", flex:1},
  textBox: {
    color: "black",
    fontSize: 40,
    margin: 5
  },
  textProps: {
    color: "white",
    fontSize: 30,
    margin: 5
  },
  rowOne: {backgroundColor: "blue", height:150, justifyContent: "center", alignItems: "center"},
  rowTwo: {backgroundColor: "violet", height:150, flexDirection: "row"},
  //rowThree: {backgroundColor: "white", height:80, flexDirection: "row"},
  rowFour: {flex:1},
  rowFive: { backgroundColor: "orange", height:50, alignItems: "flex-end", justifyContent: "center"}
});
