const express = require("express");
var router = express.Router();

var dbConn = require("../dbConnection/dbConnection");

// Add a New Note
router.post("/addNew", function (req, res) {
  let note = req.body;
  if (!note) {
    return res
      .status(400)
      .send({ error: true, message: "Please Provide a Note" });
  }

  let query =
    " Insert INTO Note (NoteHeading, NoteContent, IsArchived) values(?, ?, ?)";
  dbConn.query(
    query,
    [req.body.NoteHeading, req.body.NoteContent, req.body.IsArchived],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "New Note has been Added Successfully.",
      });
    }
  );
});

module.exports = router;
