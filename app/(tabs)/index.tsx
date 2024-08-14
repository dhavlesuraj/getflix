import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import {upComingMovieData} from "../apiCall";


export default function HomeScreen() {
  const [upcomingMovieData, setUpcomingMovieData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await upComingMovieData();
        setUpcomingMovieData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  console.log("upcomingMovieData=", upcomingMovieData);

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
