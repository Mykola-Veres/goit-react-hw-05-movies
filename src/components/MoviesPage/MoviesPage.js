// import * as MoviesAPI from "../../services/fetch-movies-api"

export default function MoviesPageSearch () {
// results
// title || original_title,   genre_ids[5,4],  backdrop_path + poster_path +...,   overview:,   id:

  // MoviesAPI.fetchMoviesAPI().then(console.log results)

return(
  <form >
      <input       
        
        name="appellation"
        required        
        id="film-name"
        aria-label="search"
        // minlength="2"

            type="text"
            // value={queryUser}
            // onChange={handlerChangeUserQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"        
      />
      <button  type="submit">
        <span >search</span>
      </button>
    </form>
)
}