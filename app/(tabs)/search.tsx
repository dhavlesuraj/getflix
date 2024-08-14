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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<any>([]);
  const colorScheme = useColorScheme(); // Get the current color scheme
  const isDarkMode = colorScheme === "dark";

  const handleSearch =async (text: any) => {
    
    setSearchTerm(text);
    if (text) {
      const res = await searchMovieData(text.toLowerCase());
      setFilteredMovies(res.results);
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
            <View style={styles.movieThumbnailContainer}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
                }}
                style={styles.thumbnail}
              />
              <Text
                style={[
                  styles.movieName,
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
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
    marginBottom: 20,
  },
  movieThumbnailContainer: {
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  movieName: {
    color:"#fff",
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 18,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    padding: 5,
    borderRadius: 3,
  },
});





