import { Image, StyleSheet, Platform , View, Text} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{backgroundColor: "cyan",flex:1}}>
      <View style={{backgroundColor: "red", height:150, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 30}}>RÖD</Text>
      </View>
      <View style={{backgroundColor: "white", height:150, flexDirection: "row"}}>
        <View style={{backgroundColor: "green", flex:1}}>
          <Text style={{fontSize: 30}}>GRÖN</Text>
        </View>
        <View style={{backgroundColor: "yellow", flex:1}}></View>
      </View>
      <View style={{backgroundColor: "white", height:80, flexDirection: "row"}}>
        <View style={{backgroundColor: "red", flex:3}}></View>
        <View style={{backgroundColor: "black", flex:1}}></View>
      </View>
      <View style={{flex:1}}></View>
      <View style={{ backgroundColor: "orange", height:50, alignItems: "flex-end", justifyContent: "center"}}>
        <Text style={{fontSize: 30}}>ORANGE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
