const express = require('express');

const router = express.Router();
const db = require('../database');

router.get('/recordClick/:id', function (req, res) {
  db.run(
    `UPDATE ads 
    SET impression = impression + 1, bill = bill + (CPI/1000)
    WHERE id = ?`,
    [req.params.id],
    (err) => {
      if (err) {
        console.log(`failed to capture event : ${err.message}`);
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json({ message: 'event captured' });
      }
    }
  );
});

router.get('/report/:ssp', function (req, res) {
  db.all(
    `SELECT * FROM ads WHERE vendor = ?`,
    [req.params.ssp],
    (err, rows) => {
      if (err) {
        console.log(`failed to generate report :${err.message}`);
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json({ ads: rows });
      }
    }
  );
});

module.exports = router;
