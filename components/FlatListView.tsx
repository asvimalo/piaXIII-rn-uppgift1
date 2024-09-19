import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

export default function FlatListView () {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Movie[]>([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.listRow}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
                <View style={{backgroundColor: "red", flex:3}}>
                    <Text style= {styles.textProps}>
                        {item.title}
                    </Text>
                </View>
                <View style={{backgroundColor: "black", flex:1}}>
                    <Text style= {styles.textProps}>
                        {item.releaseYear}
                    </Text>
                </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    listRow: {backgroundColor: "white", height:80, flexDirection: "row"},
    textProps: {
        color: "white",
        fontSize: 20
    }
})