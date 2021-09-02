const API_KEY = "060b5ad1f77012d348b301e500dbf1f2";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`
}

export default requests;