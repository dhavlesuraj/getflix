const baseURL = "http://realskill.net:5001/";



export const searchMovieData = async (searchData:any) => {
  try {
    //const userCookies = Cookies.get("authtoken");
    const userCookies =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjQ2ZmYzN2M3NmNjZTVjNmU3ZTJkZTZlOWU3NzM4NiIsIm5iZiI6MTcyMzIxNDMwMS4zODY2OTUsInN1YiI6IjY2YWYyMGVlMzYwYjY4Y2Q4MTM5ZjU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9l-mxeeHZNdWsdy8wKMdOCp2gdsSHAe_bq-TQh-28Bw";
    const myHeaders = new Headers();
    if (userCookies) {
      myHeaders.append("Your-Dynamic-Cookie", userCookies);
    }
    myHeaders.append("Authorization", `Bearer ${userCookies}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=J${searchData}&api_key=3f46ff37c76cce5c6e7e2de6e9e77386`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};