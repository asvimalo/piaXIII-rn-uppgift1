import { Image, StyleSheet, Platform , View, Text} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <Text style={styles.textProps}>RÖD</Text>
      </View>
      <View style={styles.rowTwo}>
        <View style={{backgroundColor: "green", flex:1}}>
          <Text style={styles.textProps}>GRÖN</Text>
        </View>
        <View style={{backgroundColor: "yellow", flex:1}}></View>
      </View>
      <View style={styles.rowThree}>
        <View style={{backgroundColor: "red", flex:3}}></View>
        <View style={{backgroundColor: "black", flex:1}}></View>
      </View>
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
    fontSize: 30,
    margin: 5
  },
  rowOne: {backgroundColor: "red", height:150, justifyContent: "center", alignItems: "center"},
  rowTwo: {backgroundColor: "white", height:150, flexDirection: "row"},
  rowThree: {backgroundColor: "white", height:80, flexDirection: "row"},
  rowFour: {flex:1},
  rowFive: { backgroundColor: "orange", height:50, alignItems: "flex-end", justifyContent: "center"}
});
