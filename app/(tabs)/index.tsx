import { Image, StyleSheet, Platform, Text, Alert } from 'react-native';
import { View, ScrollView } from "react-native";
import HomeBanner from '@/components/HomeBanner';
import { StatusBar } from 'expo-status-bar';
import MovieCards from '@/components/MovieCards';
import { useEffect, useState } from 'react';
import { nowPlayingMovieData, popularMovieData, topRatedMovieData } from '../apiCall';


export default function HomeScreen() {
const [nowPlayingData, setNowPlayingData] = useState([]);
const[popularMovie_Data,setPopularMovie_Data]=useState([]);
const[topRatedMoviesData,setTopRatedMoviesData]=useState([]);

useEffect(() => {
  const getData = async () => {
    try {
      const { data, status }: any = await nowPlayingMovieData();
      if (status === 200) {
        setNowPlayingData(data.results);
      } else {
        Alert.alert(`Response failed with ${data}`);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, []);

useEffect(() => {
  const getData = async () => {
    try {
      const { data, status }: any = await popularMovieData();
      if (status === 200) {
        setPopularMovie_Data(data.results);
      } else {
        Alert.alert(`Response failed with ${data}`);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, []);

useEffect(() => {
  const getData = async () => {
    try {
      const { data, status }: any = await topRatedMovieData();
      if (status === 200) {
        setTopRatedMoviesData(data.results);
      } else {
        Alert.alert(`Response failed with ${data}`);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, []);


  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style={styles.scrollView}>
        <HomeBanner />
        <View style={styles.subContainer}>
          <MovieCards title="Now Playing" data={nowPlayingData} />
          <MovieCards title="Top Rated Movies" data={topRatedMoviesData} />
          <MovieCards title="Popular Movies" data={popularMovie_Data} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
   backgroundColor:"#000",
   flex:1,
  },
  scrollView:{
   flex:1,
  },
  
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
  subContainer:{
   paddingHorizontal:15,
   gap:10,
   marginTop:20
  }
});

function setError(err: unknown) {
  throw new Error('Function not implemented.');
}

function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

