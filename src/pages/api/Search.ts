
const Search = (title: any, page: any=1) => {
    let data
  fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${title}&page=${page}`
  )
    .then((res) => res.json())
    .then((data) => {

      data= data;
    });
    console.log(data)
return data
};

export default Search;
