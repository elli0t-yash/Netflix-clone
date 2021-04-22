const API_KEY = "c934979e9958144cba063b6ebcd8a31f";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&langauge=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&langauge=en-US`,
    fetchActionMovies: `/genre/movie/list?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&width_genres=99`,
}

export default requests;