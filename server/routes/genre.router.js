const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
    // Add query to get all genres

    const queryText = `SELECT "genres"."name" FROM "genres"\
  JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id" JOIN "movies"\
  ON "movies"."id" = "movies_genres"."genre_id"\
  WHERE "movies_genres"."movie_id" = '1';`;

    pool.query(queryText)
        .then((dbRes) => {
            console.log("results:", dbRes.rows);
            res.sendStatus(200).send(dbRes.rows);
        })
        .catch((err) => {
            console.log("we have an error in here");
            console.error(err);
        });
    res.sendStatus(500);
});

module.exports = router;
