import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { nowPlayingMovieData } from "@/app/apiCall";


const MovieCards = ({ title, data }: any) => {

  const renderMovieCard: any = ({ item, index }: any) => {
    return (
      <Image
        resizeMode="contain"
        style={styles.movieImg}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
      />
    );
  }


  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          letterSpacing: 1,
          marginLeft:10
        }}
      >
        {title}
      </Text>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={data} renderItem={renderMovieCard} ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>} />
    </View>
  );
}

export default MovieCards

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(40),
    gap: 15,
    marginTop:10
  },
  movieImg: {
    width: responsiveWidth(50),
    height: '100%',
    borderRadius: 10,
  }
});


