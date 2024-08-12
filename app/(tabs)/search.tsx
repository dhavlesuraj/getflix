import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { searchMovieData } from "../apiCall";



const SearchComponent = () => {
   const movies = [
     {
       id: 1,
       name: "The Shawshank Redemption hhhhhhhhhhhhhh",
       thumbnail: "https://via.placeholder.com/150x200?text=Shawshank",
     },
     {
       id: 2,
       name: "The Godfather",
       thumbnail: "https://via.placeholder.com/150x200?text=Godfather",
     },
     {
       id: 3,
       name: "The Dark Knight",
       thumbnail: "https://via.placeholder.com/150x200?text=Dark+Knight",
     },
     {
       id: 4,
       name: "Pulp Fiction",
       thumbnail: "https://via.placeholder.com/150x200?text=Pulp+Fiction",
     },
     {
       id: 5,
       name: "Inception",
       thumbnail: "https://via.placeholder.com/150x200?text=Inception",
     },
   ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<any>(movies);

  const colorScheme = useColorScheme(); // Get the current color scheme

  const isDarkMode = colorScheme === "dark";

  const handleSearch = (text: any) => {
    setSearchTerm(text);
    if (text) {
      const filtered = movies.filter((movie) =>
        movie.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  };

  const handleMicPress = () => {
    console.log("Mic pressed");
  };

  return (
    <SafeAreaView
      style={[styles.container, isDarkMode && styles.darkContainer]}
    >
      <View
        style={[
          styles.searchInputContainer,
          isDarkMode && styles.darkSearchInputContainer,
        ]}
      >
        <Icon
          name="search"
          size={20}
          color={isDarkMode ? "#bbb" : "#ccc"}
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.searchInput, isDarkMode && styles.darkSearchInput]}
          placeholder="Search here..."
          placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
          value={searchTerm}
          onChangeText={handleSearch}
        />
        <TouchableOpacity onPress={handleMicPress}>
          <Icon
            name="microphone"
            size={20}
            color={isDarkMode ? "#bbb" : "#ccc"}
            style={styles.micIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.movieInfo}>
              <Text
                style={
                  (styles.movieName, { color: isDarkMode ? "#fff" : "#000" })
                }
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play" size={15} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() =>
          searchTerm ? (
            <Text style={styles.noResultsText}>No results found.</Text>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default SearchComponent;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#000", // Dark mode background color
  },
  searchInputContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  darkSearchInputContainer: {
    backgroundColor: "#333", // Dark mode background for input container
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
    backgroundColor: "transparent",
  },
  darkSearchInput: {
    color: "#eee", // Dark mode text color
  },
  micIcon: {
    marginLeft: 10,
  },
  searchListItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    fontSize: 18,
    color: "#333",
  },
  darkSearchListItem: {
    borderBottomColor: "#444", // Dark mode border color
    color: "#eee", // Dark mode text color
  },
  noResultsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#999",
  },
  darkNoResultsText: {
    color: "#888", // Dark mode text color
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  thumbnail: {
    width: 130,
    height: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  movieInfo: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  movieName: {
    fontSize: 16,
    color: "#fff",
    flexShrink: 1,
    marginRight: 10,
  },
  playButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e50914",
    borderRadius: 50,
    width: 40,
    height: 40,
  },
});




