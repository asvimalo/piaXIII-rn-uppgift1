import FlatListView from '@/components/FlatListView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, View, Text, StyleSheet, Image, Platform } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <Text style={styles.textProps}>Navigation</Text>
      </View>
      <View style={styles.rowTwo}>
        <View style={{backgroundColor: "white", flex:1, borderRadius: 10, borderWidth: 10, borderColor: "green"}}>
          <Text style={styles.textProps}>GRÖN</Text>
        </View>
        <View style={{ backgroundColor: "white",flex:1, borderRadius: 10, borderWidth: 10, borderColor: "yellow"}}></View>
      </View>
      <View style={styles.rowThree}>
        <View style={{backgroundColor: "red", flex:3}}></View>
        <View style={{backgroundColor: "black", flex:1}}></View>
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
  textProps: {
    color: "white",
    fontSize: 30,
    margin: 5
  },
  rowOne: {backgroundColor: "blue", height:150, justifyContent: "center", alignItems: "center"},
  rowTwo: {backgroundColor: "violet", height:150, flexDirection: "row"},
  rowThree: {backgroundColor: "white", height:80, flexDirection: "row"},
  rowFour: {flex:1},
  rowFive: { backgroundColor: "orange", height:50, alignItems: "flex-end", justifyContent: "center"}
});
