import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieData();
        setMovieData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // console.log("-----------------");
  // console.log("data=",movieData);

  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/157336?api_key=3f46ff37c76cce5c6e7e2de6e9e77386"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie data:", error);
      throw error;
    }
  };
  return (
    <>
      <SafeAreaView>
        <Text>Hello World</Text>
      </SafeAreaView>
    </>
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
