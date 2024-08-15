import { Alert, SafeAreaView, StyleSheet, Text, View, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { upComingMovieData } from '@/app/apiCall';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get("window");
const HomeBanner = () => {
    const [upcomingMovieData, setUpcomingMovieData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const { data, status }: any = await upComingMovieData();
                if (status === 200) {
                    setUpcomingMovieData(data.results);
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

    const handlePressPlayButton=()=>{
        console.log('play button pressed')
    }

    const renderViewBanner = ({ item, index }: any) => {
        return (
          <ImageBackground
            style={styles.movieBanner}
            resizeMode="cover"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.1)", "rgba(0, 0, 0, 0.7)"]}
              style={styles.linearGradient}
            >
              <Text style={styles.title}>My List</Text>
              <TouchableOpacity style={styles.playButton} onPress={handlePressPlayButton}>
                <Entypo name="controller-play" size={32} color={"black"} />
                <Text style={[styles.title,{fontSize:responsiveFontSize(2.5),color:"black",fontWeight:'700'}]}>Play</Text>
              </TouchableOpacity>
              <Text style={styles.title}>My List</Text>
            </LinearGradient>
          </ImageBackground>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={upcomingMovieData}
                renderItem={renderViewBanner}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                // Provide the width as per the screen
                getItemLayout={(_, index) => ({
                    length: screenWidth,
                    offset: screenWidth * index,
                    index,
                })}
            />
        </View>
    );
}

export default HomeBanner

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(70),
    width: "100%",
    // backgroundColor: "red",
  },
  movieBanner: {
    width: screenWidth,
    height: "100%",
    justifyContent: "flex-end",
    opacity: 0.9,
  },
  linearGradient: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "stretch",
  },
  bannerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize:responsiveFontSize(2.3),
    color: "white",
    fontWeight:'500',
  },
  playButton:{
    backgroundColor:"white",
    width:responsiveWidth(25),
    height:responsiveHeight(5.5),
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:5
  }
});