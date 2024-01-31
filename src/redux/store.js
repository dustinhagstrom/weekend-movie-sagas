import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case "SET_MOVIES":
            return action.payload;
        default:
            return state;
    }
};

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case "SET_GENRES":
            return action.payload;
        default:
            return state;
    }
};

const currentMovieGenres = (state = [], action) => {
    switch (action.type) {
        case "SET_CURRENT_MOVIE_GENRES":
            return action.payload;
        default:
            return state;
    }
};

function* fetchAllMovies() {
    try {
        // Get the movies:
        const moviesResponse = yield axios.get("/api/movies");
        // Set the value of the movies reducer:
        yield put({
            type: "SET_MOVIES",
            payload: moviesResponse.data,
        });
    } catch (error) {
        console.log("fetchAllMovies error:", error);
    }
}

function* fetchAllGenres(action) {
    try {
        // Get the movies:
        const genresResponse = yield axios.get("/api/genres");
        // Set the value of the movies reducer:
        yield put({
            type: "SET_GENRES",
            payload: genresResponse.data,
        });

    } catch (error) {
        console.log("fetchAllMovies error:", error);
    }
}

function* fetchMovieGenres(action) {

  console.log("fetchMovieDetail action id:", action.payload.id)
    try {
        // Get the movies:
        const movieResponse = yield axios.get(`/api/genres/${action.payload.id}`);
        
        console.log("movie with genre from database:", movieResponse.data);
        
        // Set the value of the movies reducer:
        yield put({
            type: "SET_CURRENT_MOVIE_GENRES",
            payload: movieResponse.data,
        });

        

        console.log("sent action payload to currentMovieWithGenre reducer");
    } catch (error) {
        console.log("fetchAllMovies error:", error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest("FETCH_MOVIES", fetchAllMovies);
    yield takeLatest("FETCH_GENRES", fetchAllGenres);
    yield takeLatest('GET_CURRENT_MOVIE_GENRES', fetchMovieGenres);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        currentMovieGenres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
