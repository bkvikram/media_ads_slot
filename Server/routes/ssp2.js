const express = require('express');

const router = express.Router();
const db = require('../database');

router.get('/getAds', function (req, res) {
  db.all(
    'SELECT id, cpi, url FROM ads WHERE vendor = "ssp2" ORDER BY RANDOM() LIMIT 4',
    [],
    (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(200).json({ ads: rows });
    }
  );
});

router.get('/listAds', function (req, res) {
  db.all('SELECT * FROM ads WHERE vendor = "ssp2"', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({ rows });
  });
});

router.post('/createAds', function (req, res) {
  db.run(
    'INSERT INTO ads (name, url, CPI, vendor) VALUES (?,?,?,?)',
    [req.body.name, req.body.URL, req.body.CPI, req.body.vendor],
    (err) => {
      if (err) {
        console.log(`create ad failed ${err.message}`);
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json({ message: 'ad posted successfuly' });
      }
    }
  );
});

module.exports = router;
