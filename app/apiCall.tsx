
const config={
   baseURL : "https://api.themoviedb.org/3",
   token :
   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjQ2ZmYzN2M3NmNjZTVjNmU3ZTJkZTZlOWU3NzM4NiIsIm5iZiI6MTcyMzIxNDMwMS4zODY2OTUsInN1YiI6IjY2YWYyMGVlMzYwYjY4Y2Q4MTM5ZjU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9l-mxeeHZNdWsdy8wKMdOCp2gdsSHAe_bq-TQh-28Bw"
  }



export const searchMovieData = async (searchData:any) => {
  try {
    //const userCookies = Cookies.get("authtoken");
    const myHeaders = new Headers();
    if (config.token) {
      myHeaders.append("Your-Dynamic-Cookie", config.token);
    }
    myHeaders.append("Authorization", `Bearer ${config.token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(
      `${config.baseURL}/search/movie?query=${searchData}&api_key=3f46ff37c76cce5c6e7e2de6e9e77386`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const upComingMovieData = async () => {
  try {
    //const userCookies = Cookies.get("authtoken");
    const myHeaders = new Headers();
    if (config.token) {
      myHeaders.append("Your-Dynamic-Cookie", config.token);
    }
    myHeaders.append("Authorization", `Bearer ${config.token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(
      `${config.baseURL}/movie/upcoming`,
      requestOptions
    );
    const data = await response.json();
   // console.log(data);
    const status=await response.status;
    return {success:true,data:data,status:status};
  } catch (error) {
    console.log(error);
  }
};

export const popularMovieData = async () => {
  try {
    //const userCookies = Cookies.get("authtoken");
    const myHeaders = new Headers();
    if (config.token) {
      myHeaders.append("Your-Dynamic-Cookie", config.token);
    }
    myHeaders.append("Authorization", `Bearer ${config.token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(
      `${config.baseURL}/movie/popular`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const topRatedMovieData = async () => {
  try {
    //const userCookies = Cookies.get("authtoken");
    const myHeaders = new Headers();
    if (config.token) {
      myHeaders.append("Your-Dynamic-Cookie", config.token);
    }
    myHeaders.append("Authorization", `Bearer ${config.token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(
      `${config.baseURL}/movie/top_rated`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const nowPlayingMovieData = async () => {
  try {
    //const userCookies = Cookies.get("authtoken");
    const myHeaders = new Headers();
    if (config.token) {
      myHeaders.append("Your-Dynamic-Cookie", config.token);
    }
    myHeaders.append("Authorization", `Bearer ${config.token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(
      `${config.baseURL}/movie/now_playing`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


