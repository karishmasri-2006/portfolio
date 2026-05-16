import express from "express";
import db from "../db.js";

const router = express.Router();

/* GET all projects */
router.get("/", (req, res) => {

  db.query("SELECT * FROM projects", (err, result) => {

    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }

  });

});

export default router;