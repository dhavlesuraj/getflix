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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<any>([]);

  const colorScheme = useColorScheme(); // Get the current color scheme

  const isDarkMode = colorScheme === "dark";

  const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Schindler’s List",
    "Inception",
    "Fight Club",
    "Forrest Gump",
    "The Matrix",
    "Goodfellas",
  ];

  const handleSearch = (text: any) => {
    setSearchTerm(text);
    if (text) {
      const filtered = movies.filter((movie) =>
        movie.toLowerCase().includes(text.toLowerCase())
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text
            style={[
              styles.searchListItem,
              isDarkMode && styles.darkSearchListItem,
            ]}
          >
            {item}
          </Text>
        )}
        ListEmptyComponent={() =>
          searchTerm ? (
            <Text
              style={[
                styles.noResultsText,
                isDarkMode && styles.darkNoResultsText,
              ]}
            >
              No results found.
            </Text>
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
});




