const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
    // query to get all genres
    const queryText = `SELECT * FROM "genres";`;

    pool.query(queryText)
        .then((dbRes) => {
            console.log("results:", dbRes.rows);
            res.status(200).send(dbRes.rows);
        })
        .catch((err) => {
            console.log("we have an error in here");
            console.error(err);
            res.sendStatus(500);
        });
});

router.get("/:id", (req, res) => {
  // console.log("id from params:", req.params.id);


  // this query joins the 'genres', 'movies', and 'movies_genres'
  // tables, then it returns the names of the genres that
  // correspond to the movie with the given id
  const queryText = `SELECT "genres"."name" FROM "genres"
  JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id" JOIN "movies"
  ON "movies"."id" = "movies_genres"."genre_id"
  WHERE "movies_genres"."movie_id" = ${req.params.id};`;

  pool.query(queryText)
      .then((dbRes) => {
          console.log("results:", dbRes.rows);
          res.status(200).send(dbRes.rows);
      })
      .catch((err) => {
          console.log("we have an error in here");
          console.error(err);
          res.sendStatus(500);
      });
});
module.exports = router;
